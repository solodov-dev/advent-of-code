const countUniqueAnswers = (group) => new Set([...group.join('')]).size;

const countSameAnswers = (group) =>
  [...group[0]].filter((letter) => group.every((line) => line.includes(letter)))
    .length;

const reduceAnswers = (input, reducer) =>
  parseGroups(input).reduce((acc, cur) => (acc += reducer(cur)), 0);

const parseGroups = (input) => {
  let groups = [[]];
  for (let line of input) {
    line === '' ? groups.push([]) : groups[groups.length - 1].push(line);
  }
  return groups;
};

export { countUniqueAnswers, reduceAnswers, countSameAnswers };
