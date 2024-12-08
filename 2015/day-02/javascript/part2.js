export default (input) =>
  input
    .split("\n")
    .map(parseLine)
    .reduce((a, b) => a + b);

const parseLine = (line) => {
  const [l, w, h] = line.split("x").map(Number);
  const perimeters = [l + w, w + h, h + l].map((p) => p * 2);
  return Math.min(...perimeters) + l * w * h;
};

export const description = "";
export const input = `2x3x4`;
export const output = 34;

