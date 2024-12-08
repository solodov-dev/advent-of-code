import {
  validatePasswords,
  isValid,
  isValidNewPolicy,
} from './password_philosophy.js';

export default [
  {
    title: 'Valid passwords',
    result: (input) => validatePasswords(input, isValid),
  },
  {
    title: 'Valid passwords (new policy)',
    result: (input) => validatePasswords(input, isValidNewPolicy),
  },
];
