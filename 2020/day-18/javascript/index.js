import { run } from './operation_order.js';

export default [
  {
    title: 'Calculates the expression',
    result: (input) => run(input, 1),
  },
  {
    title: 'Calculates the expression with + precedence 2',
    result: (input) => run(input, 2),
  },
];
