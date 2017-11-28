const { test } = require('ava')
const CustomArray = require('../../array')

test('find is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.find, undefined)
  t.is(typeof CustomArray.prototype.find, 'function')
  t.is(typeof array.find, 'function')
})

test('find() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.find(), Error)
})

test('find() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.find(1), Error)
  t.throws(() => array.find('hello'), Error)
  t.throws(() => array.find(null), Error)
})

test('find(test) returns undefined on empty array', t => {
  const array = new CustomArray()

  const result = array.find(el => el > 10)

  t.is(result, undefined)
})

test('find(test) returns first element that passes the test', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  const result = array.find(el => el > 5)

  t.is(result, 6)
})

test('find(test) returns undefined if no element passes the test', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  const result = array.find(el => el > 10)

  t.is(result, undefined)
})
