import { sumTwo, sumThree, multiply } from './report_repair.js';

export default [
  {
    title: 'Product of the two entries that sum to 2020',
    result: (input) => multiply(sumTwo(input, 2020)),
  },
  {
    title: 'Product of the three entries that sum to 2020',
    result: (input) => multiply(sumThree(input)),
  },
];
