import { containers, capacity } from './handy_haversacs.js';

export default [
  {
    title: 'Find all possible containers for a bag',
    result: (input) => containers(input, 'shiny gold'),
  },
  {
    title: 'Find how many bags can a bag contain',
    result: (input) => capacity(input, 'shiny gold'),
  },
];
