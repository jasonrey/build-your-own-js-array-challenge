const { test } = require('ava')
const CustomArray = require('../../array')

test('reverse is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.reverse, undefined)
  t.is(typeof CustomArray.prototype.reverse, 'function')
  t.is(typeof array.reverse, 'function')
})

test('reverse() mutates and reverses an array (even)', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4)

  array.reverse()

  t.is(array.length, 4)
  t.is(array[0], 4)
  t.is(array[1], 3)
  t.is(array[2], 2)
  t.is(array[3], 1)
})

test('reverse() mutates and reverses an array (odd)', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.reverse()

  t.is(array.length, 5)
  t.is(array[0], 5)
  t.is(array[1], 4)
  t.is(array[2], 3)
  t.is(array[3], 2)
  t.is(array[4], 1)
})

test('reverse() returns the reversed array', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4)

  const result = array.reverse()

  t.true(result instanceof CustomArray)
  t.is(result.length, 4)
  t.is(result[0], 4)
  t.is(result[1], 3)
  t.is(result[2], 2)
  t.is(result[3], 1)

  array.push(5)

  t.is(result.length, 5)
  t.is(result[4], 5)
})
