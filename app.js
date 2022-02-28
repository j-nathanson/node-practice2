// lodash convention
const _ = require('lodash')

// make into one array
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);