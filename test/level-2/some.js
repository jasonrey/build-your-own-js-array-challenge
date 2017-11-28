const { test } = require('ava')
const CustomArray = require('../../array')

test('some is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.some, undefined)
  t.is(typeof CustomArray.prototype.some, 'function')
  t.is(typeof array.some, 'function')
})

test('some() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.some(), Error)
})

test('some() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.some(1), Error)
  t.throws(() => array.some('hello'), Error)
  t.throws(() => array.some(null), Error)
})

test('some(test) does not mutate the array', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  array.some(el => el > 5)

  t.is(array.length, 4)
  t.is(array[0], 6)
  t.is(array[1], 7)
  t.is(array[2], 8)
  t.is(array[3], 9)
})

test('some(test) returns true if 1 element passes the test', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9)

  const result = array.some(el => el === 1)

  t.true(result)
})

test('some(test) returns true if all elements passes the test', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9)

  const result = array.some(el => el > 0)

  t.true(result)
})

test('some(test) returns false if all elements fails the test', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  const result = array.some(el => el < 6)

  t.false(result)
})
