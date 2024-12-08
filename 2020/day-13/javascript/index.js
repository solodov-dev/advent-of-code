import { earliest, timestamp } from './shuttle_search.js';

export default [
  {
    title: 'Returns the earliest bus',
    result: (input) => earliest(input),
  },
  {
    title: 'Returns the timestamp',
    result: (input) => timestamp(input),
  },
];
