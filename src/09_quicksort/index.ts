const quickSort = (list: number[]) => {
  if (list.length < 2) {
    return list
  }

  const [pivot, ...rest] = list
  const less = []
  const greater = []
  rest.forEach(number => {
    if (number < pivot) {
      less.push(number)
    } else {
      greater.push(number)
    }
  })

  return quickSort(less)
    .concat(pivot)
    .concat(quickSort(greater))
}

export { quickSort }
