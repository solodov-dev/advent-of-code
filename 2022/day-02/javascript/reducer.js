export const parser = (input, hash) => ([input[0], hash(input[2], input[0])]);

export const schema = {
  A: {
    A: 3,
    B: 6,
    C: 0,
  },
  B: {
    A: 0,
    B: 3,
    C: 6,
  },
  C: {
    A: 6,
    B: 0,
    C: 3,
  },
};

export const choice = {
  A: 1,
  B: 2,
  C: 3,
};

export const reducer = (input, hash) => input.reduce((acc, cur) => {
  const [his, my] = parser(cur, hash);
  return acc + schema[his][my] + choice[my];
}, 0);
