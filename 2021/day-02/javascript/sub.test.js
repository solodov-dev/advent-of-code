import sub from './sub.js';
import sub2 from './sub2.js';

const testInput = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    
test('Sail short trip', () => {
    expect(sub.sail(testInput)).toBe(150);
})

test('Sail with aim', () => {
    expect(sub2.sail(testInput)).toBe(900);
})
