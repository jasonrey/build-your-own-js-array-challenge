const { test } = require('ava')
const CustomArray = require('../../array')

test('splice is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.splice, undefined)
  t.is(typeof CustomArray.prototype.splice, 'function')
  t.is(typeof array.splice, 'function')
})

test('splice() returns new empty array with original array intact', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice()

  t.true(result instanceof CustomArray)
  t.is(result.length, 0)
  t.is(array.length, 5)
})
