const { test } = require('ava')
const CustomArray = require('../../array')

test('includes is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.includes, undefined)
  t.is(typeof CustomArray.prototype.includes, 'function')
  t.is(typeof array.includes, 'function')
})

test('includes() returns false on empty array', t => {
  const array = new CustomArray()

  const result = array.includes()

  t.false(result)
})

test('includes() returns true on array with undefined', t => {
  const array = new CustomArray()

  array.push(undefined)

  const result = array.includes()

  t.true(result)
})

test('includes(value) returns true on array containing value', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const result = array.includes('b')

  t.true(result)
})

test('includes(value) returns false on array without value', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const result = array.includes('d')

  t.false(result)
})

test('includes(value, start) returns true on array containing value from start < length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.includes('d', 2)

  t.true(result)
})

test('includes(value, start) returns false on array containing value before start < length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.includes('c', 3)

  t.false(result)
})

test('includes(value, -start) returns true on array containing value from -start > -length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.includes('d', -2)

  t.true(result)
})

test('includes(value, -start) returns false on array containing value before -start > -length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.includes('c', -1)

  t.false(result)
})

test('includes(value, -start) returns true on array containing value from -start < -length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.includes('d', -7)

  t.true(result)
})
