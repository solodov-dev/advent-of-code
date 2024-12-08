import { find, weakness } from './encoding_error.js';

export default [
  {
    title: 'Finds the first wrong number',
    result: (input) => find(input, 25),
  },
  {
    title: 'Finds the weakness',
    result: (input) => weakness(input, 25),
  },
];
