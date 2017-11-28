const { test } = require('ava')
const CustomArray = require('../../array')

test('forEach is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.forEach, undefined)
  t.is(typeof CustomArray.prototype.forEach, 'function')
  t.is(typeof array.forEach, 'function')
})

test('forEach() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.forEach(), Error)
})

test('forEach() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.forEach(1), Error)
  t.throws(() => array.forEach('hello'), Error)
  t.throws(() => array.forEach(null), Error)
})

test('forEach(fn) returns undefined', t => {
  const array = new CustomArray()

  const result = array.forEach(() => { })

  t.is(result, undefined)
})

test('forEach(fn) iterates over the array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const valueArray = []

  array.forEach(el => valueArray.push(el))

  t.is(valueArray[0], 'a')
  t.is(valueArray[1], 'b')
  t.is(valueArray[2], 'c')
})

test('forEach(fn) iterates over the array with index', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const indexArray = []

  array.forEach((el, i) => indexArray.push(i))

  t.is(indexArray[0], 0)
  t.is(indexArray[1], 1)
  t.is(indexArray[2], 2)
})
