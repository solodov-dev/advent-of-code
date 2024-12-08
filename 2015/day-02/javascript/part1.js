export default (input) =>
  input
    .split("\n")
    .map(parseLine)
    .reduce((acc, cur) => cur + acc, 0);

const parseLine = (line) => {
  const [l, w, h] = line.split("x").map(Number);
  const [s1, s2, s3] = [l * w, w * h, h * l];
  return 2 * (s1 + s2 + s3) + Math.min(s1, s2, s3);
};

export const description = "Day 2 part 1";
export const input = `2x3x4`;
export const output = 58;

