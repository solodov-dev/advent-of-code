import { sum } from "./shared.js";

export default (input) => input.split("\n").map(checkLine).reduce(sum, 0);

const checkLine = (line, lineIdx, input) => {
  const nums = [];
  line.split("").forEach((char, index) => {
    if (char === "*") {
      const adjacentNumbers = getAdjacentNumbers(index, input, lineIdx);
      if (adjacentNumbers.length === 2)
        nums.push(adjacentNumbers[0] * adjacentNumbers[1]);
    }
  });
  return nums;
};

const getAdjacentNumbers = (index, input, lineIdx) => {
  const left = input[lineIdx].slice(0, index).match(/\d+$/)?.[0];
  const right = input[lineIdx].slice(index + 1).match(/^\d+/)?.[0];

  let top = [];
  if (lineIdx > 0) {
    top = getNums(input[lineIdx - 1], index);
  }

  let bottom = [];
  if (lineIdx < input.length - 1) {
    bottom = getNums(input[lineIdx + 1], index);
  }

  return [left, right, ...top, ...bottom].filter(Boolean).map(Number);
};

const getNums = (line, index) => {
  const start = index - 1 >= 0 ? index - 1 : index;
  const end = index + 2 <= line.length - 1 ? index + 2 : index + 1;
  const adjacentSymbols = line.slice(start, end);
  if (adjacentSymbols.match(/^\.+$/)) {
    return [];
  }
  if (adjacentSymbols.match(/^\d+$/)) {
    return [adjacentSymbols];
  }
  if (adjacentSymbols[0] === ".") {
    return [line.slice(index).match(/^\.?(\d+)/)?.[1]];
  }
  if (adjacentSymbols.at(-1) === ".") {
    return [line.slice(0, index + 1).match(/(\d+)\.?$/)?.[1]];
  }
  if (adjacentSymbols.match(/\d\.\d/)) {
    return [
      line.slice(0, index).match(/\d+$/),
      line.slice(index + 1).match(/^\d+/),
    ];
  }
  return [];
};
