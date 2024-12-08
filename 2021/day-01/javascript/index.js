import countInc from './count_inc.js';
import triplets from './triplets.js';

const day_01 = [
    {
        title: 'Increments',
        result: (input) => countInc(input),
    },
    {
        title: 'Increments by triplet window',
        result: (input) => countInc(triplets(input)),
    },
];
export default day_01;

