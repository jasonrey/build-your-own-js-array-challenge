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

test('reduceRight(fn) throws error if no initial value provided and empty array', t => {
  const array = new CustomArray()

  t.throws(() => array.reduceRight(() => {}), Error)
})

test('reduceRight(fn) uses value of first element on single element array as accumulator', t => {
  const array = new CustomArray()

  array.push(1)

  array.reduceRight((acc, item) => {
    t.is(acc, 1)
  })
})

test('reduceRight(fn) does not mutate the array', t => {
  const array = new CustomArray()

  array.push(1)

  array.reduceRight((acc, item) => acc)

  t.is(array.length, 1)
  t.is(array[0], 1)
})

test('reduceRight(fn, init) returns the accumulator', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.reduceRight((acc, item) => acc + item, 0)

  t.is(result, 15)
})

test('reduceRight(fn, init) returns the accumulator from left', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.reduceRight((acc, item) => acc + item, '')

  t.is(result, '54321')
})
