const match = (input) => {
  const [rules, messages] = parseInput(input);
  const rule = new RegExp(`^${parseRules(rules, '0')}$`);
  return messages.reduce(
    (count, message) => (rule.test(message) ? ++count : count),
    0
  );
};

const parseInput = (input) => {
  return [
    input.slice(0, input.indexOf('')).reduce((map, cur) => {
      map.set(
        cur.slice(0, cur.indexOf(':')),
        cur.slice(cur.indexOf(' ') + 1).replace(/\"/g, '')
      );
      return map;
    }, new Map()),
    input.slice(input.indexOf('') + 1),
  ];
};

const parseRules = (rules, key) => {
  let str = rules.get(key);
  if (!/a|b/.test(str)) {
    const numbers = str.match(/\d+/g);
    for (let number of numbers) {
      str = str.replace(number, parseRules(rules, number));
    }
    str = `(${str})`;
  }
  return str.replace(/\s+/g, '');
};

export { match };
