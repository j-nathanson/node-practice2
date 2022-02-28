const { readFile, writeFile } = require('fs')

// needs utf8 code to read properly
// save contents of the first async
// call back hell

console.log('start'); //1st
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    //save contents of the second async
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        // combine them in a new file
        writeFile('./content/result-async.txt', `here os the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log('done with this task'); //3rd
        })
    })
})
console.log('start the next one'); //2nd