import countInc from './count_inc.js';
import triplets from './triplets.js';

const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

test('7 increments in a test data', () => {
    expect(countInc(data))
	.toEqual(7);

})

test('Makind tripplets array', () => {
    const tripletsArray = [607, 618, 618, 617, 647, 716, 769, 792];
    expect(triplets(data)).toEqual(tripletsArray);
})

test('5 sums that are larger than the previous sum', () => {
    expect(countInc(triplets(data)))
	.toEqual(5);
})
