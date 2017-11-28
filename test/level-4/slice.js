const { test } = require('ava')
const CustomArray = require('../../array')

test('slice is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.slice, undefined)
  t.is(typeof CustomArray.prototype.slice, 'function')
  t.is(typeof array.slice, 'function')
})

test('slice() returns a new shallow copy of array', t => {
  const array = new CustomArray()

  const obj = {}

  array.push('a', 'b', obj)

  const newArray = array.slice()

  t.is(array.length, 3)

  array.push('d')

  obj.foo = 'bar'

  t.true(newArray instanceof CustomArray)
  t.is(newArray.length, 3)
  t.is(newArray[0], 'a')
  t.is(newArray[1], 'b')
  t.is(newArray[2], obj)
  t.is(newArray[2].foo, 'bar')
  t.is(newArray[3], undefined)
  t.is(array.length, 4)
  t.is(array[0], 'a')
  t.is(array[1], 'b')
  t.is(array[2], obj)
  t.is(array[2].foo, 'bar')
  t.is(array[3], 'd')
})

test('slice(start) from start < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(2)

  t.is(slicedArray.length, 3)
  t.is(slicedArray[0], 3)
  t.is(slicedArray[1], 4)
  t.is(slicedArray[2], 5)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(start) from start > length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(7)

  t.is(slicedArray.length, 0)
  t.is(slicedArray[0], undefined)
  t.is(slicedArray[1], undefined)
  t.is(slicedArray[2], undefined)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(start) from -start > -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(-2)

  t.is(slicedArray.length, 2)
  t.is(slicedArray[0], 4)
  t.is(slicedArray[1], 5)
  t.is(slicedArray[2], undefined)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(start) from -start < -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(-7)

  t.is(slicedArray.length, 5)
  t.is(slicedArray[0], 1)
  t.is(slicedArray[1], 2)
  t.is(slicedArray[2], 3)
  t.is(slicedArray[3], 4)
  t.is(slicedArray[4], 5)
})

test('slice(start, end) from start < end < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(2, 4)

  t.is(slicedArray.length, 2)
  t.is(slicedArray[0], 3)
  t.is(slicedArray[1], 4)
  t.is(slicedArray[2], undefined)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(start, end) from end < start < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(4, 2)

  t.is(slicedArray.length, 0)
  t.is(slicedArray[0], undefined)
  t.is(slicedArray[1], undefined)
  t.is(slicedArray[2], undefined)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(start, end) from start < length < end', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(2, 7)

  t.is(slicedArray.length, 3)
  t.is(slicedArray[0], 3)
  t.is(slicedArray[1], 4)
  t.is(slicedArray[2], 5)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(start, -end) from -length < -end < start < length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(2, -1)

  t.is(slicedArray.length, 2)
  t.is(slicedArray[0], 3)
  t.is(slicedArray[1], 4)
  t.is(slicedArray[2], undefined)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(-start, -end) from -end < -length', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(-1, -7)

  t.is(slicedArray.length, 0)
  t.is(slicedArray[0], undefined)
  t.is(slicedArray[1], undefined)
  t.is(slicedArray[2], undefined)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(-start, -end) from -length < -start < -end', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(-4, -1)

  t.is(slicedArray.length, 3)
  t.is(slicedArray[0], 2)
  t.is(slicedArray[1], 3)
  t.is(slicedArray[2], 4)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(-start, -end) from -length < -end < -start', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(-1, -3)

  t.is(slicedArray.length, 0)
  t.is(slicedArray[0], undefined)
  t.is(slicedArray[1], undefined)
  t.is(slicedArray[2], undefined)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})

test('slice(-start, -end) from -start < -length < -end', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const slicedArray = array.slice(-7, -3)

  t.is(slicedArray.length, 2)
  t.is(slicedArray[0], 1)
  t.is(slicedArray[1], 2)
  t.is(slicedArray[2], undefined)
  t.is(slicedArray[3], undefined)
  t.is(slicedArray[4], undefined)
})
