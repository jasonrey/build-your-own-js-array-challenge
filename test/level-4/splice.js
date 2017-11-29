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

  array.push(6)

  t.is(array.length, 6)
  t.is(array[5], 6)
})

test('splice(start) extracts partial array from start', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice(2)

  t.is(result.length, 3)
  t.is(result[0], 3)
  t.is(result[1], 4)
  t.is(result[2], 5)

  t.is(array.length, 2)
  t.is(array[0], 1)
  t.is(array[1], 2)
})

test('splice(-start) extracts partial array from -start', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice(-2)

  t.is(result.length, 2)
  t.is(result[0], 4)
  t.is(result[1], 5)

  t.is(array.length, 3)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
})

test('splice(start, length) extracts partial array from start with length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice(2, 2)

  t.is(result.length, 2)
  t.is(result[0], 3)
  t.is(result[1], 4)

  t.is(array.length, 3)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 5)
})

test('splice(start, length) extracts nothing with 0 length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice(2, 0)

  t.is(result.length, 0)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('splice(start, -length) extracts nothing with -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice(2, -2)

  t.is(result.length, 0)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('splice(-start, length) extracts partial array from -start with length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice(-3, 2)

  t.is(result.length, 2)
  t.is(result[0], 3)
  t.is(result[1], 4)

  t.is(array.length, 3)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 5)
})

test('splice(start, length, ...item) adds item into the array at start, returns empty array with 0 length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice(2, 0, 6, 7, 8)

  t.is(result.length, 0)

  t.is(array.length, 8)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 6)
  t.is(array[3], 7)
  t.is(array[4], 8)
  t.is(array[5], 3)
  t.is(array[6], 4)
  t.is(array[7], 5)
})

test('splice(start, length, ...item) adds item into the array at start, extracts partial array with length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice(2, 2, 6, 7, 8)

  t.is(result.length, 2)
  t.is(result[0], 3)
  t.is(result[1], 4)

  t.is(array.length, 6)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 6)
  t.is(array[3], 7)
  t.is(array[4], 8)
  t.is(array[5], 5)
})
