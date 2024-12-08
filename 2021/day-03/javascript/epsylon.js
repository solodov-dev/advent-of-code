import gamma from './gamma.js';

export default (input) => gamma(input).split('').map(dig => dig === '1' ? '0' : '1').join('');
