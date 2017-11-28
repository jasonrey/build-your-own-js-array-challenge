const { test } = require('ava')
const CustomArray = require('../../array')

test('every is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.every, undefined)
  t.is(typeof CustomArray.prototype.every, 'function')
  t.is(typeof array.every, 'function')
})

test('every() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.every(), Error)
})

test('every() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.every(1), Error)
  t.throws(() => array.every('hello'), Error)
  t.throws(() => array.every(null), Error)
})

test('every(test) does not mutate the array', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  array.every(el => el > 5)

  t.true(array instanceof CustomArray)
  t.is(array.length, 4)
  t.is(array[0], 6)
  t.is(array[1], 7)
  t.is(array[2], 8)
  t.is(array[3], 9)
})

test('every(test) returns true if all elements passes the test', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  const result = array.every(el => el > 5)

  t.true(result)
})

test('every(test) returns false if 1 element fails the test', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  const result = array.every(el => el > 6)

  t.false(result)
})

test('every(test) returns false if all elements fails the test', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  const result = array.every(el => el < 6)

  t.false(result)
})
