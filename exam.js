let body = { username: "kuk", name: "limkukhyun", age: 30, email: "kuk@kaist.ac.kr" }

//VAR
var foo = "foo";
var foo = "re_foo";

var foo = "foo";
var foo = "bar";

var foo = "foo";
console.log(foo);
//ES5
var username = body.username
if (!username) { throw "'username' must required. Your input: " + username + "." }
if (!username) { throw "'username' must required. Your input: " + username + "." }
if (!username) { throw "'username' must required. Your input: " + username + "." }
if (!username) { throw "'username' must required. Your input: " + username + "." }
if (!username) { throw "'username' must required. Your input: " + username + "." }
if (!username) { throw "'username' must required. Your input: " + username + "." }
if (!username) { throw "'username' must required. Your input: " + username + "." }

//ES6
// let { username } = req.body
// if (!username) { throw `'username' must required. Your input: ${username}` }

//ES5
var myname_ = 'kuk'
var age_ = 31
var email_ = 'kuk@kaist.ac.kr'
var datas = { myname_: myname_, age_: age_, email_: email_ }
console.log(datas);
//ES6
// let myname = 'kuk'
// let age = 31
// let email = 'kuk@kaist.ac.kr'
// let datas2 = { myname, age, email }

//ES5
var name = body.name
var age = body.age
var email = body.email

console.log(name, age, email)

//ES6
// const { name, age, email } = req.body

//E5
var greeting = function (username, date, message) {
  username = typeof username !== 'undefined' ? username : 'anonymous'
  date = typeof date !== 'undefined' ? date : new Date()
  message = typeof message !== 'undefined' ? message : 'hello'
  return message + ' ' + username + ' at ' + date
}

var greeting1 = function (username, date, message) {
  username = typeof username !== 'undefined' ? username : 'anonymous'
  date = typeof date !== 'undefined' ? date : new Date()
  message = typeof message !== 'undefined' ? message : 'hello'
  return message + ' ' + username + ' at ' + date
}

var greeting2 = function (username, date, message) {
  username = typeof username !== 'undefined' ? username : 'anonymous'
  date = typeof date !== 'undefined' ? date : new Date()
  message = typeof message !== 'undefined' ? message : 'hello'
  return message + ' ' + username + ' at ' + date
}

var greeting3 = function (username, date, message) {
  username = typeof username !== 'undefined' ? username : 'anonymous'
  date = typeof date !== 'undefined' ? date : new Date()
  message = typeof message !== 'undefined' ? message : 'hello'
  return message + ' ' + username + ' at ' + date
}

var greeting4 = function (username, date, message) {
  username = typeof username !== 'undefined' ? username : 'anonymous'
  date = typeof date !== 'undefined' ? date : new Date()
  message = typeof message !== 'undefined' ? message : 'hello'
  return message + ' ' + username + ' at ' + date
}

//ES6
// const greeting = (username = 'anonymous', date = new Date(), message = 'hello') => {
//   return `${username} ${date} at ${message}`
// }

let foobars = [greeting, greeting1, greeting2, greeting3, greeting4]

foobars.map(function (item) {
  return item
})

foobars.map(function (item) {
  return item
})

foobars.map(function (item) {
  return item
})

foobars.map(function (item) {
  return item
})

foobars.map(function (item) {
  return item
})

foobars.map(function (item) {
  return item
})

foobars.map(function (item) {
  return item
})

// foobars.map((item) => {
//   return item
// })
