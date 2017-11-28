const { test } = require('ava')
const CustomArray = require('../../array')

test('push is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.push, undefined)
  t.is(typeof CustomArray.prototype.push, 'function')
  t.is(typeof array.push, 'function')
})

test('push() returns 0 and adds nothing to the array', t => {
  const array = new CustomArray()

  const result = array.push()

  t.is(result, 0)
  t.is(array.length, 0)
})

test('push(element) adds element to the end of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')

  t.is(array[0], 'a')
  t.is(array[1], 'b')
})

test('push(element) increases the length of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')

  t.is(array.length, 2)
})

test('push(element) returns the total elements passed in', t => {
  const array = new CustomArray()

  const result = array.push('a')

  t.is(result, 1)
})

test('Array[index] returns undefined if there is no such index', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')

  t.is(array[2], undefined)
  t.is(array[3], undefined)
})

test('push(...element) add multiple elements to the end of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b', 'c')

  t.is(array[0], 'a')
  t.is(array[1], 'b')
  t.is(array[2], 'c')
})

test('push(...element) increases the length of an array by ...element.length', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b', 'c')

  t.is(array.length, 3)
})

test('push(...element) returns the total elements passed in', t => {
  const array = new CustomArray()

  const result = array.push('a', 'b', 'c')

  t.is(result, 3)
})
