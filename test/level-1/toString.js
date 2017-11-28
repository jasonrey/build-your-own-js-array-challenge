const { test } = require('ava')
const CustomArray = require('../../array')

test('toString is a prototype function', t => {
  const array = new CustomArray()

  t.is(typeof CustomArray.prototype.toString, 'function')
  t.is(typeof array.toString, 'function')
})

test('toString() returns string joined by comma as delimeter', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const joinedString = array.toString()

  t.is(joinedString, 'a,b,c')
})
