const { test } = require('ava')
const CustomArray = require('../../array')

test('indexOf() returns -1 on empty array', t => {
  const array = new CustomArray()

  const result = array.indexOf()

  t.is(result, -1)
})

test('indexOf() returns 0 on array with undefined as first index', t => {
  const array = new CustomArray()

  array.push(undefined)

  const result = array.indexOf()

  t.is(result, 0)
})

test('indexOf(value) returns the matched element index in the array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.indexOf('c')

  t.is(result, 2)
})

test('indexOf(value) returns first matched element index in the array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'c', 'c')

  const result = array.indexOf('c')

  t.is(result, 2)
})

test('indexOf(value) returns -1 if no value is found in the array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.indexOf('f')

  t.is(result, -1)
})

test('indexOf(value, start) returns the matched element index in the array from start < length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.indexOf('c', 2)

  t.is(result, 2)
})

test('indexOf(value, start) returns -1 if no value is found in the array from start < length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.indexOf('c', 3)

  t.is(result, -1)
})

test('indexOf(value, start) returns -1 on start > length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.indexOf('c', 6)

  t.is(result, -1)
})

test('indexOf(value, -start) returns the matched element index in the array from -length < -start', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.indexOf('c', -3)

  t.is(result, 2)
})

test('indexOf(value, -start) returns -1 if no value is found in the array from -length < -start', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.indexOf('c', -1)

  t.is(result, -1)
})

test('indexOf(value, -start) returns the matched element index in the array from -start < -length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.indexOf('c', -10)

  t.is(result, 2)
})
