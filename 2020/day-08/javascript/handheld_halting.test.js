import { fix, loop } from './handheld_halting.js';
import testInput from '../helpers/test_input.js';

const input = testInput(
  `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`
);

describe('Handheld halting', () => {
  it('Loops through test input', () => {
    expect(loop(input)).toBe(5);
  });

  it('Fixes the infinite loop', () => {
    expect(fix(input)).toBe(8);
  });
});
