const { test } = require('ava')
const CustomArray = require('../../array')

test('sort is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.sort, undefined)
  t.is(typeof CustomArray.prototype.sort, 'function')
  t.is(typeof array.sort, 'function')
})

test('sort() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.sort(1), Error)
  t.throws(() => array.sort('hello'), Error)
  t.throws(() => array.sort(null), Error)
})
