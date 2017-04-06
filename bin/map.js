#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const map = require('../lib/map.js')

const workingArray = examples.numbers.whole
const loadCities = examples.cities.loadCities
const result = map(workingArray, (e, i, a) => e + 1)

console.log('original', workingArray)
console.log('map result', result)

loadCities((cities) => {
  const coordinates = map(cities, (e, i, a) =>
    ({longitude: +e.longitude, latitude: +e.latitude}))
  console.log(coordinates)
})
