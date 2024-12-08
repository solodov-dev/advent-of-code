import { chain, findVariations } from './adapter_array.js';

export default [
  {
    title: 'Finds the multiplication of oneJolts and threeJolts',
    result: (input) => chain(input),
  },
  {
    title: 'Finds the number of possible sequences',
    result: (input) => findVariations(input),
  },
];
