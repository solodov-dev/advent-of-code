import testInput from '../helpers/test_input.js';
import { earliest, timestamp } from './shuttle_search.js';

const input = testInput(
  `939
7,13,x,x,59,x,31,19`
);

const input2 = testInput(
  `1
17,x,13,19`
);

const input3 = testInput(
  `2
67,7,59,61`
);

describe('Shuttle search', () => {
  it('Finds the closest bus', () => {
    expect(earliest(input)).toBe(295);
  });

  it('Finds the earliest timestamp', () => {
    expect(timestamp(input2)).toBe(3417);
  });

  it('Finds the earliest timestamp', () => {
    expect(timestamp(input3)).toBe(754018);
  });
});
