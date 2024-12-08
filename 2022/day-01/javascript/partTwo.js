export default function partTwo(input) {
  let [max1, max2, max3] = [0, 0, 0];
  let cur = 0;
  for (const line of input) {
    if (line) {
      cur += Number(line);
    } else {
      if (cur > max1) {
        [max1, max2, max3] = [cur, max1, max2];
      } else if (cur > max2) {
        [max2, max3] = [cur, max2];
      } else if (cur > max3) {
        max3 = cur;
      }
      cur = 0;
    }
  }
  return max1 + max2 + max3;
}

partTwo.description = 'Three hungriest elves sum';
partTwo.expected = 45000;
