import { run } from "../../../utils/javascript/index.js";

const countTrees = (input, down, right) => {
  const lines = input.split('\n');
  let rightOffset = 0;
  let downOffset = 0;
  let trees = 0;

  while (downOffset < lines.length) {
    if (lines[downOffset][rightOffset] === '#') trees++;
    rightOffset += right;
    if (rightOffset >= lines[downOffset].length)
      rightOffset -= lines[downOffset].length;
    downOffset += down;
  }

  return trees;
};

const product = (file) =>
  [
    [1, 3],
    [1, 1],
    [1, 5],
    [1, 7],
    [2, 1],
  ].reduce((acc, [down, right]) => countTrees(file, down, right) * acc, 1);

run((input) => countTrees(input, 1, 3), product);
