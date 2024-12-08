import { getHighestId, findMySeat } from './binary_boarding.js';

export default [
  {
    title: 'Highest id is',
    result: (input) => getHighestId(input),
  },
  {
    title: 'My seat is',
    result: (input) => findMySeat(input),
  },
];
