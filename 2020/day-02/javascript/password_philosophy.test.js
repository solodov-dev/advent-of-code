import {
  validatePasswords,
  isValidNewPolicy,
  isValid,
} from './password_philosophy';

const test = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`.split('\n');

describe('Password philosophy', () => {
  it('Validates first three passwords', () => {
    expect(validatePasswords(test, isValid)).toBe(2);
  });
  it('Validates first three passwords with the new policy', () => {
    expect(validatePasswords(test, isValidNewPolicy)).toBe(1);
  });
});
