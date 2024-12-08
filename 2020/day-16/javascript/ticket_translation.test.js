import testInput from '../helpers/test_input.js';
import { validate, decode } from './ticket_translation.js';

describe('Ticket translation', () => {
  it('Finds invalid values', () => {
    const input = testInput(
      `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`
    );
    expect(validate(input)).toBe(71);
  });
});
