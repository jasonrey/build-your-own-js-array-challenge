const { test } = require('ava')
const CustomArray = require('../../array')

/*
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
*/

test('copyWithin is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.copyWithin, undefined)
  t.is(typeof CustomArray.prototype.copyWithin, 'function')
  t.is(typeof array.copyWithin, 'function')
})

test('copyWithin() returns the array', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  const result = array.copyWithin()

  array.push(4)
  result.push(5)

  t.true(result instanceof CustomArray)
  t.is(array.length, 5)
  t.is(array[3], 4)
  t.is(array[4], 5)
  t.is(result.length, 5)
  t.is(result[3], 4)
  t.is(result[4], 5)
})

test('copyWithin(target) with target < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 1)
  t.is(array[3], 2)
  t.is(array[4], 3)
})

test('copyWithin(target) with target > length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(7)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('copyWithin(-target) with -target > -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(-2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 1)
  t.is(array[4], 2)
})

test('copyWithin(-target) with -target < -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(-2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 1)
  t.is(array[4], 2)
})

test('copyWithin(target, start) with target < start < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(1, 2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 3)
  t.is(array[2], 4)
  t.is(array[3], 5)
  t.is(array[4], 5)
})

test('copyWithin(target, start) with start < target < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(2, 1)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 2)
  t.is(array[3], 3)
  t.is(array[4], 4)
})

test('copyWithin(target, -start) with -length < -start < target < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(2, -2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 4)
  t.is(array[3], 5)
  t.is(array[4], 5)
})

test('copyWithin(target, -start) with -start < -length < target < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(2, -10)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 1)
  t.is(array[3], 2)
  t.is(array[4], 3)
})

test('copyWithin(target, start, end) with target < length, start < end < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(1, 2, 3)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 3)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('copyWithin(target, start, -end) with target < length, -length < -end < start < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.copyWithin(1, 2, -1)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 3)
  t.is(array[2], 4)
  t.is(array[3], 4)
  t.is(array[4], 5)
})
