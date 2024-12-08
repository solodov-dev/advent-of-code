import { countTrees, product } from './toboggan_trajectory.js';

export default [
  {
    title: 'Trees to encounter',
    result: (input) => countTrees(input, 1, 3),
  },
  {
    title: 'Product of trees on different trajectories',
    result: (input) => product(input, countTrees),
  },
];
