const { test } = require('ava')
const CustomArray = require('../../array')

test('sort is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.sort, undefined)
  t.is(typeof CustomArray.prototype.sort, 'function')
  t.is(typeof array.sort, 'function')
})

test('sort() mutates the array and sort ascendingly by default', t => {
  const array = new CustomArray()

  array.push(5, 4, 3, 2, 1)

  array.sort()

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('sort() returns the original array', t => {
  const array = new CustomArray()

  array.push(5, 4, 3, 2, 1)

  const result = array.sort()

  array.push(6)

  t.is(result.length, 6)
  t.is(array.length, 6)
})

test('sort(descending) sorts the array descendingly', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.sort((a, b) => a < b)

  t.is(array.length, 5)
  t.is(array[0], 5)
  t.is(array[1], 4)
  t.is(array[2], 3)
  t.is(array[3], 2)
  t.is(array[4], 1)
})
