const sumRecursive = (list: number[]) => {
  if (list.length === 0) {
    return 0
  }
  return list[0] + sumRecursive(list.slice(1))
}

export { sumRecursive }
