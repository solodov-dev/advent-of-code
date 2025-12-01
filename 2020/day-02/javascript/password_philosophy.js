import { run } from "../../../utils/javascript/index.js";

const validatePasswords = (validator) =>
  (passwords) => passwords.split('\n').filter(validator).length;

const solution_1 = (record) => {
  const [min, max, char, password] = record.split(/-| |: /);
  const matches = password.match(new RegExp(char, 'g'));
  return matches && matches.length >= min && matches.length <= max;
};

const solution_2 = (record) => {
  const [min, max, char, password] = record.split(/-| |: /);
  const index1 = +min - 1;
  const index2 = +max - 1;
  return password[index1] === char
    ? !(password[index2] === char)
    : password[index2] === char;
};

run(validatePasswords(solution_1), validatePasswords(solution_2));
