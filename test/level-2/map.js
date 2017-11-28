const { test } = require('ava')
const CustomArray = require('../../array')

test('map is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.map, undefined)
  t.is(typeof CustomArray.prototype.map, 'function')
  t.is(typeof array.map, 'function')
})

test('map() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.map(), Error)
})

test('map() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.map(1), Error)
  t.throws(() => array.map('hello'), Error)
  t.throws(() => array.map(null), Error)
})

test('map(fn) returns new array with the same length', t => {
  const array = new CustomArray()

  const emptyArray = array.map(() => { })

  t.is(emptyArray.length, 0)

  array.push('a', 'b', 'c')

  const returnedArray = array.map(() => { })

  t.is(returnedArray.length, 3)
})

test('map(fn) returns new array with the fn(element) returned value as elements', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const returnedArray = array.map(el => el)

  t.is(returnedArray[0], 'a')
  t.is(returnedArray[1], 'b')
  t.is(returnedArray[2], 'c')
})
