const { test } = require('ava')
const CustomArray = require('../../array')

test('join is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.join, undefined)
  t.is(typeof CustomArray.prototype.join, 'function')
  t.is(typeof array.join, 'function')
})

test('join() returns empty string for empty array', t => {
  const array = new CustomArray()

  const joinedString = array.join()

  t.is(joinedString, '')
})

test('join() returns string with all elements joined by comma as delimeter', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const joinedString = array.join()

  t.is(joinedString, 'a,b,c')
})

test('join(delimeter) returns string with all elements joined by delimeter', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const joinedString = array.join('-')

  t.is(joinedString, 'a-b-c')
})
