import { calculate } from './operation_order.js';

describe('Operation order', () => {
  it('Calculates the expression', () => {
    expect(calculate('2 * 3 + (4 * 5)', 1)).toBe(26);
    expect(calculate('5 + (8 * 3 + 9 + 3 * 4 * 3)', 1)).toBe(437);
    expect(calculate('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))', 1)).toBe(
      12240
    );
    expect(
      calculate('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2', 1)
    ).toBe(13632);
  });
});
