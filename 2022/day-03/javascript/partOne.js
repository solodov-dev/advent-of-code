import { alphabet } from './constants.js';

export default function partOne(input) {
  let sum = 0;
  for (const line of input) {
    const [halfOne, halfTwo] = [line.slice(0, line.length / 2), line.slice(line.length / 2)];
    for (const letter of new Set(halfOne)) {
      if (halfTwo.includes(letter)) {
        sum += alphabet.indexOf(letter) + 1;
      }
    }
  }
  return sum;
}

partOne.description = 'The sum of priorities';
partOne.expected = 157;
