'use strict'

const some = function (array, callback) {
  const index = array.findIndex(callback)
  return index !== -1
}

module.exports = some
