const { test } = require('ava')
const CustomArray = require('../../array')

test('findIndex is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.findIndex, undefined)
  t.is(typeof CustomArray.prototype.findIndex, 'function')
  t.is(typeof array.findIndex, 'function')
})

test('findIndex() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.findIndex(), Error)
})

test('findIndex() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.findIndex(1), Error)
  t.throws(() => array.findIndex('hello'), Error)
  t.throws(() => array.findIndex(null), Error)
})

test('findIndex(test) returns -1 on empty array', t => {
  const array = new CustomArray()

  const result = array.findIndex(el => el > 5)

  t.is(result, -1)
})

test('findIndex(test) returns first element index that passes the test', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  const result = array.findIndex(el => el > 5)

  t.is(result, 5)
})

test('findIndex(test) returns -1 if no element passes the test', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  const result = array.findIndex(el => el > 10)

  t.is(result, -1)
})
