'use strict'
// callback is a predicate
// if true, return element to new array
const filter = function (originalArray, callback) {
  const resultArray = []
  for (let i = 0; i < originalArray.length; i++) {
    const element = originalArray[i]
    // callback is a function, so it requires parentheses
    // and the three standard args, element, index, and array
    if (callback(element, i, originalArray)) {
      resultArray.push(element)
    }
  }
  return resultArray
}
module.exports = filter
