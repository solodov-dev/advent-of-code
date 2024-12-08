import partOne from './partOne';
import partTwo from './partTwo';
import getTestInput from '../../utils/getTestInput';

const testInput = getTestInput(import.meta.url);

[partOne, partTwo].forEach((part) => test(part.description, () => {
  expect(part(testInput)).toBe(part.expected);
}));
