import { binarySearch, getSeatId } from './binary_boarding.js';

describe('Binary boarding', () => {
  it('Finds the correct row', () => {
    expect(binarySearch('BFFFBBF', Array.from(Array(128).keys()))).toBe(70);
  });
  it('Finds the correct col', () => {
    expect(binarySearch('RRR', Array.from(Array(8).keys()))).toBe(7);
  });
  it('Finds ID for  BFFFBBFRRR', () => {
    expect(getSeatId('BFFFBBFRRR')).toBe(567);
  });
});
