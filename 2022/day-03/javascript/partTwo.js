import {alphabet} from "./constants.js";

export default function partTwo(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i += 3) {
    for (const letter of new Set(input[i])) {
      if (input[i + 1].includes(letter) && input[i + 2].includes(letter)) {
        sum += alphabet.indexOf(letter) + 1;
      }
    }
  }
  return sum;
}

partTwo.description = 'Common badges of three elves group';
partTwo.expected = 70;
