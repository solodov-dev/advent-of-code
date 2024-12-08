import {
  reduceAnswers,
  countSameAnswers,
  countUniqueAnswers,
} from './custom_customs.js';

export default [
  {
    title: 'The sum of the groups',
    result: (input) => reduceAnswers(input, countUniqueAnswers),
  },
  {
    title: 'Sum answers everyone answered yes',
    result: (input) => reduceAnswers(input, countSameAnswers),
  },
];
