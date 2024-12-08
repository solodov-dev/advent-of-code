import powerConsumption from './powerConsumption.js';
import lifeSupportRating from './lifeSupportRating.js';

const day3 = [
    {
        title: 'Power consumption: ',
        result: (input) => powerConsumption(input)
    },
    {
        title: 'Life support rating',
        result: (input) => lifeSupportRating(input)
    },
];

export default day3;

