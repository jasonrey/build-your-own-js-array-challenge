const { test } = require('ava')
const CustomArray = require('../../array')

test('fill is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.fill, undefined)
  t.is(typeof CustomArray.prototype.fill, 'function')
  t.is(typeof array.fill, 'function')
})

test('fill() returns the array', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  const result = array.fill()

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

test('fill() all elements as undefined', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  array.fill()

  t.is(array.length, 3)
  t.is(array[0], undefined)
  t.is(array[1], undefined)
  t.is(array[2], undefined)
})

test('fill(value) all elements as value', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  array.fill('a')

  t.is(array.length, 3)
  t.is(array[0], 'a')
  t.is(array[1], 'a')
  t.is(array[2], 'a')
})

test('fill(value, start) from start < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', 2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 'a')
  t.is(array[3], 'a')
  t.is(array[4], 'a')
})

test('fill(value, start) from start > length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', 10)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('fill(value, -start) from -start > -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 'a')
  t.is(array[4], 'a')
})

test('fill(value, -start) from -start < -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -10)

  t.is(array.length, 5)
  t.is(array[0], 'a')
  t.is(array[1], 'a')
  t.is(array[2], 'a')
  t.is(array[3], 'a')
  t.is(array[4], 'a')
})

test('fill(value, start, end) from start < end < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', 1, 4)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 'a')
  t.is(array[2], 'a')
  t.is(array[3], 'a')
  t.is(array[4], 5)
})

test('fill(value, start, end) from end < start < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', 4, 1)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('fill(value, start, -end) from -length < -end < start < end < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', 1, -2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 'a')
  t.is(array[2], 'a')
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('fill(value, start, -end) from -end < -length < start < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', 1, -10)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('fill(value, -start, end) from -length < -start < start < end < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -3, 4)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 'a')
  t.is(array[3], 'a')
  t.is(array[4], 5)
})

test('fill(value, -start, end) from -start < -length < start < end < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -10, 4)

  t.is(array.length, 5)
  t.is(array[0], 'a')
  t.is(array[1], 'a')
  t.is(array[2], 'a')
  t.is(array[3], 'a')
  t.is(array[4], 5)
})

test('fill(value, -start, -end) from -length < -start < -end', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -4, -2)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 'a')
  t.is(array[2], 'a')
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('fill(value, -start, -end) from -length < -end < -start', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -2, -4)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('fill(value, -start, -end) from -start < -length < -end', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -10, -2)

  t.is(array.length, 5)
  t.is(array[0], 'a')
  t.is(array[1], 'a')
  t.is(array[2], 'a')
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('fill(value, -start, -end) from -start < -end < -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -10, -8)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})

test('fill(value, -start, -end) from -end < -start < -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  array.fill('a', -8, -10)

  t.is(array.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
})
