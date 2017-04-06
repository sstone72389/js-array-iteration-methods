#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const forEach = require('../lib/for-each.js')

// const workingArray = examples.numbers.fibonacci

loadCities((cities) => {}
    forEach(cities, (e, i, a) => {
  console.log(e, i, a === workingArray)
})
