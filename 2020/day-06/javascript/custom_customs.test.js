import {
  countUniqueAnswers,
  reduceAnswers,
  countSameAnswers,
} from './custom_customs.js';
import testInput from '../helpers/test_input.js';

const test = testInput(
  `abcx
abcy
abcz`
);

const test2 = testInput(
  `abc

a
b
c

ab
ac

a
a
a
a

b`
);

describe('Custom customs', () => {
  it('Counts the number of questions answered in a group', () => {
    expect(countUniqueAnswers(test)).toBe(6);
  });

  it('Counts the sum of answers in groups', () => {
    expect(reduceAnswers(test2, countUniqueAnswers)).toBe(11);
  });

  it('Counts the sum of answers where everyone answered YES', () => {
    expect(reduceAnswers(test2, countSameAnswers)).toBe(6);
  });
});
