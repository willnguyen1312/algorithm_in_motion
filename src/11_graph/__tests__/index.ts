import { searchGraph } from '..'

test('searchGraph function should work', () => {
  const graph = {}
  graph['you'] = ['alice', 'bob', 'claire']
  graph['bob'] = ['anuj', 'peggy']
  graph['alice'] = ['peggy']
  graph['claire'] = ['thom', 'jonny']
  graph['anuj'] = []
  graph['peggy'] = []
  graph['thom'] = []
  graph['jonny'] = []

  // Find a person with name ended by 'm'
  const predicateFunc1 = person => person[0] === 'p'
  expect(searchGraph('you', graph, predicateFunc1)).toBe('peggy')

  // Find a person with name ended by 'z'
  const predicateFunc2 = person => person[0] === 'z'
  expect(searchGraph('you', graph, predicateFunc2)).toBeUndefined()
})
