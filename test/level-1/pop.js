const { test } = require('ava')
const CustomArray = require('../../array')

test('pop is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.pop, undefined)
  t.is(typeof CustomArray.prototype.pop, 'function')
  t.is(typeof array.pop, 'function')
})

test('pop() returns the last element of an array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const popValue = array.pop()

  t.is(popValue, 'c')
})

test('pop() removes the last element of an array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')
  array.pop()

  t.is(array[0], 'a')
  t.is(array[1], 'b')
  t.is(array[2], undefined)
})

test('pop() decreases the length of an array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')
  array.pop()

  t.is(array.length, 2)
})

test('pop() returns undefined for empty array', t => {
  const array = new CustomArray()

  const popValue = array.pop()

  t.is(popValue, undefined)
})

test('pop() keeps empty array on empty array', t => {
  const array = new CustomArray()

  array.pop()

  t.is(array.length, 0)
})

test('pop() becomes empty array on 1 element in array', t => {
  const array = new CustomArray()

  array.push('a')

  array.pop()

  t.is(array.length, 0)
  t.is(array[0], undefined)
})
