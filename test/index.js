const { test } = require('ava')
const CustomArray = require('../array')

test('Array length returns 0 for new/empty array', t => {
  const array = new CustomArray()

  t.is(array.length, 0)
})

test('Array length returns 1 for new array constructed with length 1', t => {
  const array = new CustomArray(1)

  t.is(array.length, 1)
})

test('Array length returns 2 for new array constructed with length 2', t => {
  const array = new CustomArray(2)

  t.is(array.length, 2)
})
