const find = (input, preambleIndex) => {
  const numbers = input.map((line) => +line);
  for (let n = preambleIndex; n < numbers.length; n++) {
    const preamble = numbers.slice(n - preambleIndex, n);
    let found = false;
    for (let i = 0; i < preamble.length - 1; i++) {
      for (let j = i + 1; j < preamble.length; j++) {
        if (preamble[i] + preamble[j] === numbers[n]) {
          found = true;
        }
      }
    }
    if (!found) return numbers[n];
  }
};

const weakness = (input, preambleIndex) => {
  const numbers = input.map((line) => +line);
  const error = find(input, preambleIndex);
  const beforeErrorArray = numbers.slice(0, numbers.indexOf(error));
  let sumRangeArray = [];

  for (let i = 0; i < beforeErrorArray.length - 2; i++) {
    for (let j = i + 2; j < beforeErrorArray.length; j++) {
      if (
        beforeErrorArray.slice(i, j).reduce((acc, cur) => acc + cur, 0) ===
        error
      ) {
        sumRangeArray = beforeErrorArray.slice(i, j);
      }
    }
  }

  return Math.min(...sumRangeArray) + Math.max(...sumRangeArray);
};

export { find, weakness };
