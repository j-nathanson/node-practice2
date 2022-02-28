//same and fs.readFileSync()
const { readFileSync, writeFileSync } = require('fs')

// store and print the contents of a file
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

// create a new file/override with new contents
// using flag will just append to original contents
writeFileSync('./content/result-sync.txt', `here os the result : ${first}, ${second}`, { flag: 'a' })