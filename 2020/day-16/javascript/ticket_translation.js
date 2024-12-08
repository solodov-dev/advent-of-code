const validate = (input) => {
  const [fields, , tickets] = parseInput(input);
  const invalidValues = [];
  for (let ticket of tickets) {
    const value = invalidValue(ticket, fields);
    if (value !== -1) invalidValues.push(value);
  }
  return invalidValues.reduce((sum, cur) => (sum += cur));
};

const decode = (input) => {
  const [fields, myTicket, allTickets] = parseInput(input);
  const filteredTickets = [
    ...filterInvalidTickets(allTickets, fields),
    myTicket,
  ];

  const combinations = findCombinations(filteredTickets, fields);
  const flatCombinations = flattenCombinations(combinations);
  const departureIndexes = flatCombinations.reduce((arr, cur, index) => {
    return cur.includes('departure') ? [...arr, index] : [...arr];
  }, []);

  return departureIndexes.reduce((mul, index) => (mul *= myTicket[index]), 1);
};

const flattenCombinations = (arr) => {
  const combinations = [...arr];
  while (combinations.some((el) => Array.isArray(el))) {
    const index = combinations.findIndex((c) => c.length === 1);
    const field = combinations[index][0];
    combinations[index] = field;
    combinations.forEach((el) => {
      if (Array.isArray(el) && el.includes(field))
        el.splice(el.indexOf(field), 1);
    });
  }
  return combinations;
};

const findCombinations = (tickets, fields) => {
  const combinations = [];
  for (let i = 0; i < tickets[0].length; i++) {
    combinations.push([]);
    for (let [field, value] of Object.entries(fields)) {
      if (tickets.every((ticket) => inFieldRange(ticket[i], value))) {
        combinations[i].push(field);
      }
    }
  }
  return combinations;
};

const filterInvalidTickets = (tickets, fields) =>
  tickets.filter((ticket) => invalidValue(ticket, fields) === -1);

const invalidValue = (ticket, fields) => {
  for (let number of ticket) {
    let valid = false;
    for (let field of Object.values(fields)) {
      if (inFieldRange(number, field)) {
        valid = true;
        break;
      }
    }
    if (!valid) return number;
  }
  return -1;
};

const inFieldRange = (number, field) =>
  inRange(number, field[0].min, field[0].max) ||
  inRange(number, field[1].min, field[1].max);

const inRange = (val, min, max) => val >= min && val <= max;

const parseInput = (input) => {
  const arr = [...input];
  const fields = parseFields(arr.splice(0, arr.indexOf('')));
  const myTicket = arr[2].split(',').map((e) => +e);
  const tickets = arr.splice(5).map((t) => t.split(',').map((e) => +e));
  return [fields, myTicket, tickets];
};

const parseFields = (input) => {
  const pattern = /([a-zA-Z ]+): (\d+)-(\d+) or (\d+)-(\d+)/;
  return input.reduce((obj, line) => {
    const groups = pattern.exec(line);
    return {
      ...obj,
      [groups[1]]: [
        { min: +groups[2], max: +groups[3] },
        { min: +groups[4], max: +groups[5] },
      ],
    };
  }, {});
};

export { validate, decode };
