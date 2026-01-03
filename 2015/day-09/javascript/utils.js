/**
 * Return all possible permutations of array of values
 * @template T
 * @param {T[]} values - An array of type T
 * @returns {T[][]} - an array of arrays of possible permutations
 */
export const permutations = (values) => {
  if (values.length === 1) {
    return [values]
  }

  let p = []

  values.forEach((current, i) => {
    let remainigElements = values.slice(0, i).concat(values.slice(i + 1));
    let remainigPermutations = permutations(remainigElements)

    remainigPermutations.forEach(permutation => {
      p.push([current].concat(permutation));
    })
  })

  return p
}

/**
 * Generate a path key "a->b"
 * @param {string}a
 * @param {string}b
 */
export const key = (a, b) => `${a}->${b}`

/**
 * Parse input
 * @param {string}data - input
 */
export const parseInput = (data) => {
  let places = new Set();
  let distances = new Map();

  data.trim().split('\n').forEach(line => {
    const regex = /(\w+) to (\w+) = (\d+)/;
    const matches = line.match(regex);
    let [_, from, to, distance] = matches;

    places.add(from);
    places.add(to);
    distances.set(key(from, to), Number(distance));
    distances.set(key(to, from), Number(distance));
  })

  return { places: Array.from(places), distances }
}

/**
 * Function to find the route
 * @param {number}initial - initial value of result
 * @param {function(...number): void}compareFunc - function to compare result with
 * @param {string[]}places
 * @param {Map<string, number>}distances
 */
export const findRoute = (initial, compareFunc, places, distances) => {
  let possibleRoutes = permutations(places);

  let res = initial;

  possibleRoutes.forEach(route => {
    let total = 0;

    for (let i = 0; i < route.length - 1; i++) {
      total += distances.get(key(route[i], route[i + 1]));
    }

    res = compareFunc(total, res);
  })

  return res
}
