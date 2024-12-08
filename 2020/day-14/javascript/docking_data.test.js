import testInput from '../helpers/test_input.js';
import { program1, program2 } from './docking_data.js';

const input = testInput(
  `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`
);

const input2 = testInput(
  `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`
);

describe('Docking data', () => {
  it('Returns the sum', () => {
    expect(program1.execute(input)).toBe(165);
  });

  it('Returns the sum for the second program', () => {
    expect(program2.execute(input2)).toBe(208);
  });
});
