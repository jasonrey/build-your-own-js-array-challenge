const { test } = require('ava')
const CustomArray = require('../../array')

test('splice() returns new empty array with original array intact', t => {
  const array = new CustomArray()

  array.push(1, 2, 3, 4, 5)

  const result = array.splice()

  t.is(result.length, 0)
  t.is(array.length, 5)
  t.true(result instanceof CustomArray)
})
