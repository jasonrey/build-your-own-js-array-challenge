const { test } = require('ava')
const CustomArray = require('../../array')

test('lastIndexOf() returns -1 on empty array', t => {
  const array = new CustomArray()

  const result = array.lastIndexOf()

  t.is(result, -1)
})

test('lastIndexOf() returns 0 on array with undefined as first index', t => {
  const array = new CustomArray()

  array.push(undefined)

  const result = array.lastIndexOf()

  t.is(result, 0)
})

test('lastIndexOf(value) returns the matched element index in the array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.lastIndexOf('c')

  t.is(result, 2)
})

test('lastIndexOf(value) returns last matched element index in the array', t => {
  const array = new CustomArray()

  array.push('c', 'c', 'c', 'b', 'a')

  const result = array.lastIndexOf('c')

  t.is(result, 2)
})

test('lastIndexOf(value) returns -1 if no value is found in the array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.lastIndexOf('f')

  t.is(result, -1)
})

test('lastIndexOf(value, start) returns the matched element index in the array from start < length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.lastIndexOf('c', 4)

  t.is(result, 2)
})

test('lastIndexOf(value, start) returns -1 if no value is found in the array from start < length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.lastIndexOf('c', 1)

  t.is(result, -1)
})

test('lastIndexOf(value, start) returns the matched element index on start > length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.lastIndexOf('c', 10)

  t.is(result, 2)
})

test('lastIndexOf(value, -start) returns the matched element index in the array from -length < -start', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.lastIndexOf('c', -1)

  t.is(result, 2)
})

test('lastIndexOf(value, -start) returns -1 if no value is found in the array from -length < -start', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.lastIndexOf('c', -4)

  t.is(result, -1)
})

test('lastIndexOf(value, -start) returns -1 on -start < -length', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const result = array.lastIndexOf('c', -10)

  t.is(result, -1)
})
