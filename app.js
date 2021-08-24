var fs = require('fs');
const { ESLint } = require("eslint");
const eslint = new ESLint();



const main = async (tempMax = 200, tempMin = 0.001, coolingType = "", refactoringType = "varlet") => {

  sInit = getNewString("./exam.js") //초기문자열
  s = getNewString("./exam.js");
  temp = tempMax;
  count = 0;
  while (true) {
    count = count + 1;
    s_new = getRandomReplace(sInit, refactoringType)
    let percent = await getNewState(s, s_new, temp);
    if (percent > Math.random()) {
      s = s_new
      let fitOld = await fitness(s);
      console.log(fitOld);
    }
    temp = cool(temp, count, coolingType)
    if (tempMin > temp) break;
  }
  console.log(s);
  console.log(await fitness(s));

  return;
}

const cool = (temp, count, coolingType) => {
  a = 0.001  // 기울기

  if (coolingType == 'exponential')
    return temp * (a ** count);
  else if (coolingType == 'logarithmic')
    return temp / Math.log(count);
  else
    return temp - (a * count);
}

const getNewState = async (s, s_new, temp) => {
  let fitNew = await fitness(s_new);
  let fitOld = await fitness(s);
  if (fitNew > fitOld) {
    return 1.0
  } else {
    return Math.exp((fitNew - fitOld) / temp)
  }
}

const getNewString = (filename) => {
  let data = fs.readFileSync(filename);
  return data.toString();
}

const fitness = async (string) => {
  const results = await eslint.lintText(string);
  // console.log(results[0].errorCount)
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);
  // console.log(resultText);
  return results[0].errorCount;
}

const getRandomReplace = (string, type) => {
  let result_string = "";
  if (type === "varlet")
    result_string = varlet(string);
  else if (type === "varconst")
    result_string = varconst(string);
  else if (type === "arrow")
    result_string = arrow(string);
  else if (type === "defaultParameter")
    result_string = defaultParameter(string);
  else if (type === "tempalteLiterals")
    result_string = tempalteLiterals(string);
  else if (type === "objecctInitialize")
    result_string = objecctInitialize(string);
  else if (type === "destructuringAssignment")
    result_string = destructuringAssignment(string);
  else
    result_string = varlet(arrow(defaultParameter(tempalteLiterals(objecctInitialize(destructuringAssignment(string))))))
  return result_string;
}

const varlet = (string) => {
  let new_string = string
  const REPLACE_TEXT = /var /gi;
  new_string = new_string.replace(REPLACE_TEXT, x => getRandomInt(0, 2) === 0 ? " " : "let ")
  return new_string;
}

const varconst = (string) => {
  let new_string = string
  const REPLACE_TEXT = /let /gi;
  new_string = new_string.replace(REPLACE_TEXT, x => getRandomInt(0, 2) === 0 ? " " : "const ")
  return new_string;
}

const arrow = (string) => {
  let new_string = string
  new_string = new_string.replace(/function \(/gi, x => getRandomInt(0, 2) === 0 ? "(" : x)
  new_string = new_string.replace(/\)/gi, x => getRandomInt(0, 2) === 0 ? ") =>" : x)
  // new_string = new_string.replace("=> =>", x => "=>")
  // console.log(new_string);

  return new_string;
}

const defaultParameter = (string) => {
  let new_string = string
  new_string = new_string.replace(/\(.*\)/gi, (x) => {
    x = x.replace('(', "");
    x = x.replace(')', "");
    x = x.split(',')
    x = x.map(item => item + '="todo"')
    x = x.join(',');
    return "(" + x + ")"
  })
  return new_string
}

const tempalteLiterals = (string) => {
  let new_string = string
  const REPLACE_TEXT = /\" \+ .* \+ \"/gi;
  new_string = new_string.replace(REPLACE_TEXT, (x) => {
    let select_index = getRandomInt(0, 2);
    if (select_index === 0) {
      x = x.replace('" + ', "${");
      x = x.replace(' + "', "}");
      return x
    } else {
      return x
    }

  })

  new_string = new_string.replace(/"/gi, x => getRandomInt(0, 2) === 0 ? "`" : x)

  return new_string;
}

const objecctInitialize = (string) => {
  let new_string = string
  new_string = new_string.replace(/\{.*\}/gi, (x) => {
    x = x.replace('{', "");
    x = x.replace('}', "");
    x = x.split(',')
    x = x.map(item => item.split(":")[0])
    x = x.join(',');
    return "{" + x + "}"
  })
  return new_string;
}

const destructuringAssignment = (string) => {
  return string;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

let tempMax = 200;
let tempMin = 0.001
let coolingType = "";
let refactoringType = 'varlet';


main(tempMax, tempMin, coolingType, refactoringType);