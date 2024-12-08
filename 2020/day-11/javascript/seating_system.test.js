import testInput from '../helpers/test_input.js';
import { seat, look, lookDeep } from './seating_system.js';

const input = testInput(
  `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`
);

describe('Seating system', () => {
  it('Finds the final sitting state close', () => {
    expect(seat(input, look, 4)).toBe(37);
  });
  it('Finds the final sitting state far', () => {
    expect(seat(input, lookDeep, 5)).toBe(26);
  });
});
