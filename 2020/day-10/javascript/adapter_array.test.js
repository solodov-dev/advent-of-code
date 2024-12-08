import testInput from '../helpers/test_input.js';
import { chain, findVariations } from './adapter_array.js';

const input = testInput(
  `16
10
15
5
1
11
7
19
6
12
4`
);

const input2 = testInput(
  `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`
);

describe('Adapter array', () => {
  it('Finds the multiplication of jolt differences', () => {
    expect(chain(input)).toBe(35);
  });

  it('Finds optional variations', () => {
    expect(findVariations(input)).toBe(8);
  });

  it('Finds optional variations', () => {
    expect(findVariations(input2)).toBe(19208);
  });
});
