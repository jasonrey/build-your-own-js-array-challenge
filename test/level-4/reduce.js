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
