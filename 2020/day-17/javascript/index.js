import { play } from './conway_cubes.js';

export default [
  {
    title: 'Sum of active cubes after 6 turns',
    result: (input) => play(input, 3),
  },
  {
    title: 'Sum of active cubes after 6 turns (4d)',
    result: (input) => play(input, 4),
  },
];
