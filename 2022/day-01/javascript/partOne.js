export default function partOne(input) {
  let max = 0;
  let cur = 0;
  for (const line of input) {
    if (!line) {
      max = Math.max(max, cur);
      cur = 0;
    } else {
      cur += Number(line);
    }
  }
  return max;
}

partOne.description = 'How many calories the elf carries?';
partOne.expected = 24000;
