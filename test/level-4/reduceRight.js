const { test } = require('ava')
const CustomArray = require('../../array')

test('reduceRight is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.reduceRight, undefined)
  t.is(typeof CustomArray.prototype.reduceRight, 'function')
  t.is(typeof array.reduceRight, 'function')
})

test('reduceRight() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.reduceRight(), Error)
})

test('reduceRight() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.reduceRight(1), Error)
  t.throws(() => array.reduceRight('hello'), Error)
  t.throws(() => array.reduceRight(null), Error)
})
