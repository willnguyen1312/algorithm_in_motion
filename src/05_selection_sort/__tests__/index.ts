import { selectionSort } from '..'

test('selectionSort function should work', () => {
  const list1 = [1, 2, 3, 2, 4]
  const expectedOutput1 = [1, 2, 2, 3, 4]

  expect(selectionSort(list1)).toEqual(expectedOutput1)

  const list2 = [6, 8, 3, 2, 4]
  const expectedOutput2 = [2, 3, 4, 6, 8]

  expect(selectionSort(list2)).toEqual(expectedOutput2)
})
