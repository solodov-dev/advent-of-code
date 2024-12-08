import {
  validatePassports,
  hasRequiredFields,
  allFieldsAreValid,
} from './passport_processing.js';

export default [
  {
    title: 'Passports with required fields',
    result: (input) => validatePassports(input, hasRequiredFields),
  },
  {
    title: 'Passports with valid fields',
    result: (input) => validatePassports(input, allFieldsAreValid),
  },
];
