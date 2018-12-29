let graph = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

graph['a'] = {}
graph['a']['fin'] = 1

graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5

graph['fin'] = {}

let infinity = Number.POSITIVE_INFINITY
let costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = infinity

let parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = undefined

let processed = []

const find_lowest_cost_node = costs => {
  let lowest_cost = Number.POSITIVE_INFINITY
  let lowest_cost_node = undefined

  for (let node in costs) {
    let cost = costs[node]
    if (cost < lowest_cost && !processed.includes(node)) {
      lowest_cost = cost
      lowest_cost_node = node
    }
  }
  return lowest_cost_node
}

let node = find_lowest_cost_node(costs)

while (node) {
  let cost = costs[node]
  let neighbors = graph[node]
  for (const n of Object.keys(neighbors)) {
    const new_cost = cost + neighbors[n]
    if (costs[n] > new_cost) {
      costs[n] = new_cost
    }
    parents[n] = node
  }
  processed.push(node)
  node = find_lowest_cost_node(costs)
}
