const countTrees = (input, down, right) => {
  let rightOffset = 0;
  let downOffset = 0;
  let trees = 0;

  while (downOffset < input.length) {
    if (input[downOffset][rightOffset] === '#') trees++;
    rightOffset += right;
    if (rightOffset >= input[downOffset].length)
      rightOffset -= input[downOffset].length;
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
  ].reduce((acc, cur) => countTrees(file, cur[0], cur[1]) * acc, 1);

export { countTrees, product };
