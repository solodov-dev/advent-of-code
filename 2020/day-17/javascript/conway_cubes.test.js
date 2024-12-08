import testInput from '../helpers/test_input.js';
import { play } from './conway_cubes.js';

const input = testInput(
  `.#.
..#
###`
);

describe('Conway cubes', () => {
  it('Makes 6 turns in 3d', () => {
    expect(play(input, 3)).toBe(112);
  });

  it('Makes 6 turns in 4d', () => {
    expect(play(input, 4)).toBe(848);
  });
});
