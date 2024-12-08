const chain = (input) => {
  const connectionsArray = connections(parseInput(input));
  return (
    connectionsArray.filter((el) => el === 3).length *
    connectionsArray.filter((el) => el === 1).length
  );
};

const connections = (array) => {
  const res = [];
  for (let i = 0; i < array.length - 1; i++) res.push(array[i + 1] - array[i]);
  return res;
};

// Possible trips through n consecutive numbers are equal to the number in position n in the Tribonacci sequence.
// The possible trips through each group of consecutive numbers are multiplied together to get the final result.
// There are no more than 4 consecutive numbers in my input, so I simplified the solution

const findVariations = (input) => {
  const inputArray = parseInput(input);
  let tribonacci = [0, 1, 2, 4, 7];
  let diff = 0;
  let diffs = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] - inputArray[i - 1] === 1) {
      diff++;
    } else if (diff > 0) {
      diffs.push(diff);
      diff = 0;
    }
  }
  return diffs.reduce((acc, cur) => (acc *= tribonacci[cur]), 1);
};

const parseInput = (input) => {
  const newArr = input.map((line) => +line).sort((a, b) => a - b);
  return [0, ...newArr, newArr[newArr.length - 1] + 3];
};

export { chain, findVariations };
