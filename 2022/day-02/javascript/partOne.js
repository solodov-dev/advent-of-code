import { reducer } from './reducer.js';

export default function partOne(input) {
  const table = {
    X: 'A',
    Y: 'B',
    Z: 'C',
  };

  const hash = (code) => table[code];

  return reducer(input, hash);
}

partOne.description = 'Follow the guide';
partOne.expected = 15;
