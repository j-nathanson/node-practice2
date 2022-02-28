// no window because there is no browser
// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory 
//'/Users/Jacob/Desktop/NucampFolder/practice/node'

// __filename - file name
// /Users/Jacob/Desktop/NucampFolder/practice/node/app.js
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed


const { john, peter } = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
// runs the function
require('./mind-grenade')

// console.log(data)
// print object { john: 'john', peter: 'peter' }
// console.log(names)
//console.log(module);

// sayHi('susan')
// sayHi(john)
// sayHi(peter)
