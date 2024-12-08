import { fix, loop } from './handheld_halting.js';

export default [
  {
    title: 'Accumulator before entering the infinite loop',
    result: (input) => loop(input),
  },
  {
    title: 'Fixed app',
    result: (input) => fix(input),
  },
];
