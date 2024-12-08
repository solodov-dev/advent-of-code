import testInput from '../helpers/test_input.js';
import { find, weakness } from './encoding_error.js';

const input = testInput(
  `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`
);

describe('Encoding error', () => {
  it('Finds the first wrong number', () => {
    expect(find(input, 5)).toBe(127);
  });

  it('Finds the weakness', () => {
    expect(weakness(input, 5)).toBe(62);
  });
});
