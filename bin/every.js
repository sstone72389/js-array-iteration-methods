#!/usr/bin/env node
'use strict'
const examples = require('../lib/examples')
const every = require('../lib/every.js')
const loadCities = examples.cities.loadCities
loadCities((cities) => {
  const result = every(cities, (e, i, a) => e.country === 'US')
  console.log(result)
})
