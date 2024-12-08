import { validate, decode } from './ticket_translation.js';

export default [
  {
    title: 'Find invalid numbers',
    result: (input) => validate(input),
  },
  {
    title: 'Decode my ticket',
    result: (input) => decode(input),
  },
];
