import { run } from '../../../utils/javascript/index.js';

export const SUM = 2020;

const findComplementProduct = (set, sum) => {
  for (let num of set) {
    if (num === 0) continue;

    const complement = sum - num;
    if (set.has(complement)) return complement * num;
  }
}

const makeSet = (input) => new Set(input.split('\n').map(Number));

const solution_1 = (input) => {
  const set = makeSet(input);
  return findComplementProduct(set, SUM);
};

const solution_2 = (input) => {
  const set = makeSet(input);

  for (let num of set) {
    const sumOfTwo = SUM - num;

    const complementProduct = findComplementProduct(set, sumOfTwo);

    if (complementProduct) return complementProduct * num;
  }
};

run(solution_1, solution_2);

