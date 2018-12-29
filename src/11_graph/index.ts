const searchGraph = (name: string, graph, predicateFunc: Function) => {
  let searchQueue = []
  searchQueue = searchQueue.concat(graph[name])
  const searched = []

  while (searchQueue.length) {
    const person = searchQueue.shift()

    if (!searched.includes(person)) {
      if (predicateFunc(person)) {
        return person
      }

      searchQueue = searchQueue.concat(graph[person])
      searched.push(person)
    }
  }

  return undefined
}

export { searchGraph }
