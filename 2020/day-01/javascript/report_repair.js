const sumTwo = (input, sum) => {
  const set = parse(input);
  set.delete(0);
  for (let num of set) {
    const complement = sum - num;
    if (set.has(complement)) return [complement, num];
  }
};

const sumThree = (input) => {
  const set = parse(input);
  for (let num of set) {
    const sumOfTwo = 2020 - num;
    const sum = sumTwo(input, sumOfTwo);
    if (sum) return [...sum, num];
  }
};

const parse = (input) => new Set(input.map((n) => +n));

const multiply = (arr) => arr.reduce((acc, cur) => acc * cur);

export { sumTwo, sumThree, multiply };
