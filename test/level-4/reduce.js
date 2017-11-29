const { test } = require('ava')
const CustomArray = require('../../array')

test('reduce is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.reduce, undefined)
  t.is(typeof CustomArray.prototype.reduce, 'function')
  t.is(typeof array.reduce, 'function')
})

test('reduce() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.reduce(), Error)
})

test('reduce() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.reduce(1), Error)
  t.throws(() => array.reduce('hello'), Error)
  t.throws(() => array.reduce(null), Error)
})

test('reduce(fn) throws error if no initial value provided and empty array', t => {
  const array = new CustomArray()

  t.throws(() => array.reduce(() => {}), Error)
})

test('reduce(fn) uses value of first element on single element array as accumulator', t => {
  const array = new CustomArray()

  array.push(1)

  const result = array.reduce((acc, item) => acc)

  t.is(result, 1)
})

test('reduce(fn) does not mutate the array', t => {
  const array = new CustomArray()

  array.push(1)

  array.reduce((acc, item) => acc)

  t.is(array.length, 1)
  t.is(array[0], 1)
})

test('reduce(fn, init) returns the accumulator', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.reduce((acc, item) => acc + item, 0)

  t.is(result, 15)
})

test('reduce(fn, init) returns the accumulator from left', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.reduce((acc, item) => acc + item, '')

  t.is(result, '12345')
})
