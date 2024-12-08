const inputToGraph = (input, reducer) =>
  input.reduce((graph, line) => reducer(graph, line), new Map());

const addToGraphReverse = (graph, line) => {
  const [, next, origins] = parseLine(line);
  origins.split(', ').forEach((node) => {
    if (!node.includes('no other')) {
      const [, , key] = parseNode(node);
      graph.has(key) ? graph.get(key).push(next) : graph.set(key, [next]);
    }
  });
  return graph;
};

const addToGraph = (graph, line) => {
  const [, origin, next] = parseLine(line);
  !next.includes('no other') &&
    graph.set(
      origin,
      [...next.split(', ')].map((bag) => {
        const [, capacity, node] = parseNode(bag);
        return { capacity: +capacity, node };
      })
    );
  return graph;
};

const parseLine = (line) => /(\w+ \w+) bags contain (.*)\./.exec(line);

const parseNode = (node) => /(\d+) (\w+ \w+)/.exec(node);

const containers = (input, node) => {
  const visited = new Set();
  const graph = inputToGraph(input, addToGraphReverse);
  const visit = (node) => {
    for (let next of graph.get(node)) {
      visited.add(next);
      graph.has(next) && visit(next);
    }
  };
  visit(node);
  return visited.size;
};

const capacity = (input, node) => {
  const graph = inputToGraph(input, addToGraph);
  const visit = (node) => {
    let count = 0;
    for (const next of graph.get(node)) {
      graph.has(next.node)
        ? (count += next.capacity + next.capacity * visit(next.node))
        : (count += next.capacity);
    }
    return count;
  };
  return visit(node);
};

export { inputToGraph, containers, capacity };
