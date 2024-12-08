import gamma from './gamma.js';
import epsylon from './epsylon.js';
import powerConsumption from './powerConsumption.js';
import lifeSupportRating from './lifeSupportRating';

const testInput = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
]

test('Most common bit', () => {
    expect(gamma(testInput)).toBe('10110');
})

test('Power consumption', () => {
    expect(epsylon(testInput)).toBe('01001');
})

test('Power consumption', () => {
    expect(powerConsumption(testInput)).toBe(198)
})

test('Life support rating', () => {
  expect(lifeSupportRating(testInput)).toBe(230);
})
