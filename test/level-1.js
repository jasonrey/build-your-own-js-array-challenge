const { test } = require('ava')
const CustomArray = require('../array')

// push
// pop
// shift
// unshift
// join
// forEach

test('push is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.push, undefined)
  t.is(typeof CustomArray.prototype.push, 'function')
  t.is(typeof array.push, 'function')
})

test('push(element) adds element to the end of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')

  t.is(array[0], 'a')
  t.is(array[1], 'b')
})

test('push(element) increases the length of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')

  t.is(array.length, 2)
})

test('Array[index] returns undefined if there is no such index', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')

  t.is(array[2], undefined)
  t.is(array[3], undefined)
})

test('push(...element) add multiple elements to the end of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b', 'c')

  t.is(array[0], 'a')
  t.is(array[1], 'b')
  t.is(array[2], 'c')
})

test('push(...element) increases the length of an array by ...element.length', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b', 'c')

  t.is(array.length, 3)
})

test('pop is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.pop, undefined)
  t.is(typeof CustomArray.prototype.pop, 'function')
  t.is(typeof array.pop, 'function')
})

test('pop() returns the last element of an array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const popValue = array.pop()

  t.is(popValue, 'c')
})

test('pop() removes the last element of an array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')
  array.pop()

  t.is(array[0], 'a')
  t.is(array[1], 'b')
  t.is(array[2], undefined)
})

test('pop() decreases the length of an array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')
  array.pop()

  t.is(array.length, 2)
})

test('pop() returns undefined for empty array', t => {
  const array = new CustomArray()

  const popValue = array.pop()

  t.is(popValue, undefined)
  t.is(array.length, 0)
})

test('unshift is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.unshift, undefined)
  t.is(typeof CustomArray.prototype.unshift, 'function')
  t.is(typeof array.unshift, 'function')
})

test('unshift(element) adds element to the beginning of an array', t => {
  const array = new CustomArray()

  array.unshift('a')
  array.unshift('b')

  t.is(array[0], 'b')
  t.is(array[1], 'a')
})

test('unshift(element) increases the length of an array', t => {
  const array = new CustomArray()

  array.unshift('a')
  array.unshift('b')

  t.is(array.length, 2)
})

test('unshift(...element) add multiple elements to the beginning of an array', t => {
  const array = new CustomArray()

  array.unshift('a')
  array.unshift('b', 'c')

  t.is(array[0], 'b')
  t.is(array[1], 'c')
  t.is(array[2], 'a')
})

test('unshift(...element) increases the length of an array by ...element.length', t => {
  const array = new CustomArray()

  array.unshift('a')
  array.unshift('b', 'c')

  t.is(array.length, 3)
})

test('shift is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.shift, undefined)
  t.is(typeof CustomArray.prototype.shift, 'function')
  t.is(typeof array.shift, 'function')
})

test('shift() returns the first element of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')
  array.push('c')

  const shiftValue = array.shift()

  t.is(shiftValue, 'a')
})

test('shift() removes the first element of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')
  array.push('c')

  array.shift()

  t.is(array[0], 'b')
  t.is(array[1], 'c')
  t.is(array[2], undefined)
})

test('shift() decreases the length of an array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')
  array.push('c')

  array.shift()

  t.is(array.length, 2)
})

test('shift() returns undefined for empty array', t => {
  const array = new CustomArray()

  array.push('a')
  array.push('b')
  array.push('c')

  const shiftValue = array.shift()

  t.is(shiftValue, undefined)
  t.is(array.length, 0)
})

test('join is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.join, undefined)
  t.is(typeof CustomArray.prototype.join, 'function')
  t.is(typeof array.join, 'function')
})

test('join() returns empty string for empty array', t => {
  const array = new CustomArray()

  const joinedString = array.join()

  t.is(joinedString, '')
})

test('join() returns string with all elements joined by comma as delimeter', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const joinedString = array.join()

  t.is(joinedString, 'a,b,c')
})

test('join(delimeter) returns string with all elements joined by delimeter', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const joinedString = array.join('-')

  t.is(joinedString, 'a-b-c')
})

test('toString is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.toString, undefined)
  t.is(typeof CustomArray.prototype.toString, 'function')
  t.is(typeof array.toString, 'function')
})

test('toString() returns string joined by comma as delimeter', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const joinedString = array.toString()

  t.is(joinedString, 'a,b,c')
})

test('forEach is a prototype function', t => {
  const array = new CustomArray()

  t.is(CustomArray.forEach, undefined)
  t.is(typeof CustomArray.prototype.forEach, 'function')
  t.is(typeof array.forEach, 'function')
})

test('forEach() throws error if no callback passed in', t => {
  const array = new CustomArray()

  t.throws(array.forEach(), Error)
})

test('forEach() throws error if non function type is passed in', t => {
  const array = new CustomArray()

  t.throws(array.forEach(1), Error)
  t.throws(array.forEach('hello'), Error)
  t.throws(array.forEach(null), Error)
})

test('forEach(fn) returns undefined', t => {
  const array = new CustomArray()

  const result = array.forEach(() => {})

  t.is(result, undefined)
})

test('forEach(fn) iterates over the array', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const valueArray = []

  array.forEach(el => valueArray.push(el))

  t.is(valueArray[0], 'a')
  t.is(valueArray[1], 'b')
  t.is(valueArray[2], 'c')
})

test('forEach(fn) iterates over the array with index', t => {
  const array = new CustomArray()

  array.push('a', 'b', 'c')

  const indexArray = []

  array.forEach((el, i) => indexArray.push(i))

  t.is(indexArray[0], 0)
  t.is(indexArray[1], 1)
  t.is(indexArray[2], 2)
})
