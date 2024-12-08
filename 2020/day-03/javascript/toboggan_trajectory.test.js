import { countTrees, product } from './toboggan_trajectory';

const test = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`.split('\n');

describe('Toboggan trajectory', () => {
  it('Encounters 7 trees with test slope', () => {
    expect(countTrees(test, 1, 3)).toBe(7);
  });

  it('Finds the multiplication of test slopes', () => {
    expect(product(test)).toBe(336);
  });
});
