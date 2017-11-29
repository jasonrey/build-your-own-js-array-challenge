const { test } = require('ava')
const CustomArray = require('../../array')

test('concat is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.concat, undefined)
  t.is(typeof CustomArray.prototype.concat, 'function')
  t.is(typeof array.concat, 'function')
})

test('concat() returns a new array', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  const result = array.concat()

  t.true(result instanceof CustomArray)

  array.push(6)

  t.is(array.length, 4)
  t.is(result.length, 3)
})

test('concat(...item) does not mutate any array', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  const array2 = new CustomArray()

  array2.push(4, 5)

  array.concat(array2)

  t.is(array.length, 3)
  t.is(array2.length, 2)
})

test('concat(...items) returns new array with all items', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  const array2 = new CustomArray()

  array2.push(4, 5)

  const array3 = new CustomArray()

  array3.push(8, 9)

  const result = array.concat(array2, 6, 7, array3)

  t.is(result.length, 9)
  t.is(result[0], 1)
  t.is(result[1], 2)
  t.is(result[2], 3)
  t.is(result[3], 4)
  t.is(result[4], 5)
  t.is(result[5], 6)
  t.is(result[6], 7)
  t.is(result[7], 8)
  t.is(result[8], 9)
})
