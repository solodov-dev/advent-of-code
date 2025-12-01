import fs from 'fs';

export const test = (solution1, solution2) => {
  const test_input = fs.readFileSync('../data/test_input', { encoding: 'utf8' }).trim();
  const expected_1 = fs.readFileSync('../data/test_result_part_1', { encoding: 'utf8' }).trim();
  const expected_2 = fs.readFileSync('../data/test_result_part_2', { encoding: 'utf8' }).trim();

  const result_1 = solution1(test_input);
  if (result_1 != expected_1) {
    throw new Error('Part 1 solution test failed');
  }

  const result_2 = solution2(test_input);
  if (result_2 != expected_2) {
    throw new Error('Part 2 solution test failed');
  }
}
