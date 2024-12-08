import { seat, look, lookDeep } from './seating_system.js';

export default [
  {
    title: 'Finds the optimal sitting sequence',
    result: (input) => seat(input, look, 4),
  },
  {
    title: 'Finds the optimal sitting sequence looking far',
    result: (input) => seat(input, lookDeep, 5),
  },
];
