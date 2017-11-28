const { test } = require('ava')
const CustomArray = require('../../array')

test('filter is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.filter, undefined)
  t.is(typeof CustomArray.prototype.filter, 'function')
  t.is(typeof array.filter, 'function')
})

test('filter() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.filter(), Error)
})

test('filter() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(() => array.filter(1), Error)
  t.throws(() => array.filter('hello'), Error)
  t.throws(() => array.filter(null), Error)
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
