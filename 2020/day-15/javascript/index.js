import { play } from './rambunctious_recitation.js';

export default [
  {
    title: 'Plays the game',
    result: () => play([16, 11, 15, 0, 1, 7], 2020),
  },
  {
    title: 'Plays the game',
    result: () => play([16, 11, 15, 0, 1, 7], 30000000),
  },
];
