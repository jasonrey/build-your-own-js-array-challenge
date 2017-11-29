const { test } = require('ava')
const CustomArray = require('../../array')

test('entries is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.entries, undefined)
  t.is(typeof CustomArray.prototype.entries, 'function')
  t.is(typeof array.entries, 'function')
})

test('entries() returns correct iterator object', t => {
  const array = new CustomArray()

  const iterator = array.entries()

  t.is(typeof iterator.next, 'function')

  const result = iterator.next()

  t.is(typeof result, 'object')
  t.is(result.value, undefined)
  t.true(result.done)
})

test('entries().next() returns correct value', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c', 'd', 'e')

  const iterator = array.entries()

  let result = iterator.next()

  t.true(result.value instanceof CustomArray)

  t.is(result.value[0], 0)
  t.is(result.value[1], 'a')
  t.false(result.done)

  result = iterator.next()

  t.is(result.value[0], 1)
  t.is(result.value[1], 'b')
  t.false(result.done)

  result = iterator.next()

  t.is(result.value[0], 2)
  t.is(result.value[1], 'c')
  t.false(result.done)

  result = iterator.next()

  t.is(result.value[0], 3)
  t.is(result.value[1], 'd')
  t.false(result.done)

  result = iterator.next()

  t.is(result.value[0], 4)
  t.is(result.value[1], 'e')
  t.false(result.done)

  result = iterator.next()

  t.is(result.value, undefined)
  t.true(result.done)

  result = iterator.next()

  t.is(result.value, undefined)
  t.true(result.done)
})
