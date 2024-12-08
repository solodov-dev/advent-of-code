import { reducer, schema } from './reducer.js';

export default function partTwo(input) {
  const table = {
    X: 0,
    Y: 3,
    Z: 6,
  };

  const hash = (my, his) => {
    const result = table[my];
    const options = schema[his];
    return Object.keys(options).find((key) => options[key] === result);
  };

  return reducer(input, hash);
}

partTwo.description = 'Follow the guide';
partTwo.expected = 12;
