import { mergesort } from '..'

test('quicksort function should work', () => {
  const list = [1, 2, 4, 5, 6, 3]
  const expectedOutput = [1, 2, 3, 4, 5, 6]

  expect(mergesort(list)).toEqual(expectedOutput)
})
