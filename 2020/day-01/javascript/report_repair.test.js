import { sumTwo, sumThree, multiply } from './report_repair.js';
import testInput from '../helpers/test_input.js';

const input = testInput(
  `1721
979
366
299
675
1456`
);

describe('Report repair', () => {
  it('Finds a multiplication of two numbers', () => {
    expect(multiply(sumTwo(input, 2020))).toBe(514579);
  });

  it('Finds a multiplication of three numbers', () => {
    expect(multiply(sumThree(input))).toBe(241861950);
  });
});
