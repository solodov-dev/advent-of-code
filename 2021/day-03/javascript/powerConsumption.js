import gamma from './gamma.js';
import epsylon from './epsylon.js';
import toDecimal from './toDecimal.js';

export default (input) => {
    const g = toDecimal(gamma(input));
    const e = toDecimal(epsylon(input));
    return g * e;
}


