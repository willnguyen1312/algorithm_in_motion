const selectionSort = (list: number[]) => {
  const result = [...list]
  const { length } = list

  for (let i = 0; i < length; i += 1) {
    let minIndex = i

    for (let j = i + 1; j < length; j += 1) {
      if (list[j] < list[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      ;[result[i], result[minIndex]] = [result[minIndex], result[i]]
    }
  }
  return result
}

export { selectionSort }
