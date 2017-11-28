const { test } = require('ava')
const CustomArray = require('../array')

// map
// filter
// every
// fill
// keys
// values
// reverse
// toString

test('map is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.map, undefined)
  t.is(typeof CustomArray.prototype.map, 'function')
  t.is(typeof array.map, 'function')
})

test('map() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(array.map(), Error)
})

test('map() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(array.map(1), Error)
  t.throws(array.map('hello'), Error)
  t.throws(array.map(null), Error)
})

test('map(fn) returns new array with the same length', t => {
  const array = new CustomArray()

  const emptyArray = array.map(() => {})

  t.is(emptyArray.length, 0)

  array.push('a', 'b', 'c')

  const returnedArray = array.map(() => {})

  t.is(returnedArray.length, 3)
})

test('map(fn) returns new array with the fn(element) returned value as elements', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const returnedArray = array.map(el => el)

  t.is(returnedArray[0], 'a')
  t.is(returnedArray[1], 'b')
  t.is(returnedArray[2], 'c')
})

test('filter is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.filter, undefined)
  t.is(typeof CustomArray.prototype.filter, 'function')
  t.is(typeof array.filter, 'function')
})

test('filter() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(array.filter(), Error)
})

test('filter() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(array.filter(1), Error)
  t.throws(array.filter('hello'), Error)
  t.throws(array.filter(null), Error)
})

test('filter(test) returns new array that contains only elements that passes test(element)', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  const returnedArray = array.filter(el => el > 5)

  t.is(array.length, 10)
  t.is(returnedArray.length, 5)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
  t.is(array[5], 6)
  t.is(array[6], 7)
  t.is(array[7], 8)
  t.is(array[8], 9)
  t.is(array[9], 10)
  t.is(returnedArray[0], 6)
  t.is(returnedArray[1], 7)
  t.is(returnedArray[2], 8)
  t.is(returnedArray[3], 9)
  t.is(returnedArray[4], 10)
})

test('filter(test) returns new empty array on empty array', t => {
  const array = new CustomArray()

  const returnedArray = array.filter(el => true)

  array.push('a')

  t.is(array.length, 1)
  t.is(returnedArray.length, 0)
})

test('filter(test) returns new array if all elements passes test(element)', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  const returnedArray = array.filter(el => true)

  array.push('a')

  t.is(array.length, 11)
  t.is(returnedArray.length, 10)

  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
  t.is(array[3], 4)
  t.is(array[4], 5)
  t.is(array[5], 6)
  t.is(array[6], 7)
  t.is(array[7], 8)
  t.is(array[8], 9)
  t.is(array[9], 10)
  t.is(array[10], 'a')
  t.is(returnedArray[0], 1)
  t.is(returnedArray[1], 2)
  t.is(returnedArray[2], 3)
  t.is(returnedArray[3], 4)
  t.is(returnedArray[4], 5)
  t.is(returnedArray[5], 6)
  t.is(returnedArray[6], 7)
  t.is(returnedArray[7], 8)
  t.is(returnedArray[8], 9)
  t.is(returnedArray[9], 10)
  t.is(returnedArray[10], undefined)
})

test('every is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.every, undefined)
  t.is(typeof CustomArray.prototype.every, 'function')
  t.is(typeof array.every, 'function')
})

test('every() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(array.every(), Error)
})

test('every() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(array.every(1), Error)
  t.throws(array.every('hello'), Error)
  t.throws(array.every(null), Error)
})

test('every(test) does not mutate the array', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  array.every(el => el > 5)

  t.is(array.length, 4)
  t.is(array[0], 6)
  t.is(array[1], 7)
  t.is(array[2], 8)
  t.is(array[3], 9)
})

test('every(test) returns true if all elements passes the test', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  const result = array.every(el => el > 5)

  t.true(result)
})

test('every(test) returns false if one of the elements fails the test', t => {
  const array = new CustomArray()

  array.push(6, 7, 8, 9)

  const result = array.every(el => el > 6)

  t.false(result)
})

test('fill is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.fill, undefined)
  t.is(typeof CustomArray.prototype.fill, 'function')
  t.is(typeof array.fill, 'function')
})

test('fill() does not mutate the array', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  array.fill()

  t.is(array.length, 3)
  t.is(array[0], 1)
  t.is(array[1], 2)
  t.is(array[2], 3)
})

test('fill() returns a new array with all elements as undefined', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  const result = array.fill()

  t.is(result.length, 3)
  t.is(result[0], undefined)
  t.is(result[1], undefined)
  t.is(result[2], undefined)
})

test('fill(value) returns a new array with all elements as value', t => {
  const array = new CustomArray()

  array.push(1, 2, 3)

  const result = array.fill('a')

  t.is(result.length, 3)
  t.is(result[0], 'a')
  t.is(result[1], 'a')
  t.is(result[2], 'a')
})

test('fill(value, start) returns a new array with elements as value from start index', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.fill('a', 2)

  t.is(result.length, 5)
  t.is(result[0], 1)
  t.is(result[1], 2)
  t.is(result[2], 'a')
  t.is(result[3], 'a')
  t.is(result[4], 'a')
})

test('fill(value, start, end) returns a new array with elements as value from start to end index', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.fill('a', 1, 3)

  t.is(result.length, 5)
  t.is(result[0], 1)
  t.is(result[1], 'a')
  t.is(result[2], 'a')
  t.is(result[3], 'a')
  t.is(result[4], 5)
})

test('reverse is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.reverse, undefined)
  t.is(typeof CustomArray.prototype.reverse, 'function')
  t.is(typeof array.reverse, 'function')
})

test('reverse() mutates and reverses an array', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4)

  array.reverse()

  t.is(array.length, 4)
  t.is(array[0], 4)
  t.is(array[1], 3)
  t.is(array[2], 2)
  t.is(array[3], 1)
})

test('reverse() returns the reversed array', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4)

  const result = array.reverse()

  t.is(result.length, 4)
  t.is(result[0], 4)
  t.is(result[1], 3)
  t.is(result[2], 2)
  t.is(result[3], 1)

  array.push(5)

  t.is(result.length, 5)
  t.is(result[4], 5)
})
