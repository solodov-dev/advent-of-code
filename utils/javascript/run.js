import fs from 'fs';
import { test } from './test.js';

export const run = (solution_1, solution_2) => {
  try {
    test(solution_1, solution_2);
    const input = fs.readFileSync('../data/input', { encoding: 'utf8' }).trim();
    console.log('Solution part 1: ', solution_1(input));
    console.log('Solution part 2: ', solution_2(input));
  } catch (e) {
    console.error(e);
  }
}
