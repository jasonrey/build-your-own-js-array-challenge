const { test } = require('ava')
const CustomArray = require('../../array')

test('@@iterator is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray[Symbol.iterator], undefined)
  t.is(typeof CustomArray.prototype[Symbol.iterator], 'function')
  t.is(typeof array[Symbol.iterator], 'function')
})

test('@@iterator() returns correct iterator object', t => {
  const array = new CustomArray()

  const iterator = array[Symbol.iterator]()

  t.is(typeof iterator.next, 'function')

  const result = iterator.next()

  t.is(typeof result, 'object')
  t.is(result.value, undefined)
  t.true(result.done)
})

test('@@iterator().next() returns correct value', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const iterator = array[Symbol.iterator]()

  let result = iterator.next()

  t.is(result.value, 1)
  t.false(result.done)

  result = iterator.next()

  t.is(result.value, 2)
  t.false(result.done)

  result = iterator.next()

  t.is(result.value, 3)
  t.false(result.done)

  result = iterator.next()

  t.is(result.value, 4)
  t.false(result.done)

  result = iterator.next()

  t.is(result.value, 5)
  t.false(result.done)

  result = iterator.next()

  t.is(result.value, undefined)
  t.true(result.done)

  result = iterator.next()

  t.is(result.value, undefined)
  t.true(result.done)
})
