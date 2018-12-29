import { sumRecursive } from '..'

test('sumRecursive function should work', () => {
  const list = [1, 2, 3, 4, 5, 6]
  const expectedOutput = 21

  expect(sumRecursive(list)).toBe(expectedOutput)
})
