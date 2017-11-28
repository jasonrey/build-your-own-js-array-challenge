const { test } = require('ava')
const CustomArray = require('../../array')

test('shift is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.shift, undefined)
  t.is(typeof CustomArray.prototype.shift, 'function')
  t.is(typeof array.shift, 'function')
})

test('shift() returns the first element of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')
  array.push('c')

  const shiftValue = array.shift()

  t.is(shiftValue, 'a')
})

test('shift() removes the first element of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')
  array.push('c')

  array.shift()

  t.is(array[0], 'b')
  t.is(array[1], 'c')
  t.is(array[2], undefined)
})

test('shift() decreases the length of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')
  array.push('c')

  array.shift()

  t.is(array.length, 2)
})

test('shift() returns undefined for empty array', t => {
  const array = new CustomArray()

  const shiftValue = array.shift()

  t.is(shiftValue, undefined)
})

test('shift() keeps empty array on empty array', t => {
  const array = new CustomArray()

  array.shift()

  t.is(array.length, 0)
})

test('shift() becomes empty array on 1 element in array', t => {
  const array = new CustomArray()

  array.push('a')

  array.shift()

  t.is(array.length, 0)
  t.is(array[0], undefined)
})
