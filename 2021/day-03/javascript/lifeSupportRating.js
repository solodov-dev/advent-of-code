import filter from './filter.js';
import gamma from './gamma.js';
import epsylon from './epsylon.js';
import toDecimal from './toDecimal.js';

export default (input) => {
  const oxy = toDecimal(filter(input, gamma));
  const co2 = toDecimal(filter(input, epsylon));
  return oxy * co2;
}
