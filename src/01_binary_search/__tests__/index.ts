import { binarySearch } from "..";

test('binarySeach function should work', () => {
  const list1 = [1,2,3]
  const item1 = 3
  const expectedOutput1 = 2

  expect(binarySearch(list1, item1)).toBe(expectedOutput1)

  const list2 = [1,2,3]
  const item2 = 10
  const expectedOutput2 = -1

  expect(binarySearch(list2, item2)).toBe(expectedOutput2)

  const list3 = [1,2,3]
  const item3 = 1
  const expectedOutput3 = 0

  expect(binarySearch(list3, item3)).toBe(expectedOutput3)
});