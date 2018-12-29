const mergeTwoSortedList = (leftList: number[], rightList: number[]) => {
  let result = []

  while (leftList.length && rightList.length) {
    const minElement =
      leftList[0] < rightList[0] ? leftList.shift() : rightList.shift()
    result.push(minElement)
  }

  return result.concat(leftList).concat(rightList)
}

const mergeSort = (list: number[]) => {
  if (list.length < 2) {
    return list
  }

  const middleIndex = Math.floor(list.length / 2)
  const leftList = list.slice(0, middleIndex)
  const rightList = list.slice(middleIndex)

  const leftSortedList = mergeSort(leftList)
  const rightSortedList = mergeSort(rightList)

  return mergeTwoSortedList(leftSortedList, rightSortedList)
}

export { mergeSort as quickSort }
