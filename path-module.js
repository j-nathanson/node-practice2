const path = require('path')

// prints /
console.log(path.sep)

// prints /content/subfolder/test.txt
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

// prints test.txt
const base = path.basename(filePath)
console.log(base)

// prints full absolute path
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute);