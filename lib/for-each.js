'use strict'
// this shows what a forEach loop does using a FOR loop
const forEach = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    callback(element, i, array)
  }
}

// MDN for each example
// var a = ['a', 'b', 'c'];
//
// a.forEach(function(element) {
//     console.log(element);
// });

// a
// b
// c

module.exports = forEach
