const { test } = require('ava')
const CustomArray = require('../../array')

test('unshift is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.unshift, undefined)
  t.is(typeof CustomArray.prototype.unshift, 'function')
  t.is(typeof array.unshift, 'function')
})

test('unshift() returns 0 and adds nothing to the array', t => {
  const array = new CustomArray()

  const result = array.unshift()

  t.is(result, 0)
  t.is(array.length, 0)
})

test('unshift(element) adds element to the beginning of an array', t => {
  const array = new CustomArray()

  array.unshift('a')
  array.unshift('b')

  t.is(array[0], 'b')
  t.is(array[1], 'a')
})

test('unshift(element) increases the length of an array', t => {
  const array = new CustomArray()

  array.unshift('a')
  array.unshift('b')

  t.is(array.length, 2)
})

test('unshift(element) returns the total elements passed in', t => {
  const array = new CustomArray()

  const result = array.unshift('a')

  t.is(result, 1)
})

test('unshift(...element) add multiple elements to the beginning of an array', t => {
  const array = new CustomArray()

  array.unshift('a')
  array.unshift('b', 'c')

  t.is(array[0], 'b')
  t.is(array[1], 'c')
  t.is(array[2], 'a')
})

test('unshift(...element) increases the length of an array by ...element.length', t => {
  const array = new CustomArray()

  array.unshift('a')
  array.unshift('b', 'c')

  t.is(array.length, 3)
})

test('unshift(...element) returns the total elements passed in', t => {
  const array = new CustomArray()

  const result = array.unshift('a', 'b', 'c')

  t.is(result, 3)
})
