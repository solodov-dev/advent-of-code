// Functional

const play = (input, limit) => {
  const history = input.reduce(
    (map, cur, index) => map.set(cur, { lastSpoken: index }),
    new Map()
  );

  let lastNum = input[input.length - 1];

  for (let turn = history.size; turn < limit; turn++) {
    if (history.get(lastNum).beforeLastSpoken !== undefined) {
      let nextNumber = next(history.get(lastNum));
      lastNum = update(history, nextNumber, turn);
    } else {
      lastNum = update(history, 0, turn);
    }
  }

  return lastNum;
};

const update = (map, num, turn) => {
  map.set(num, {
    beforeLastSpoken: map.has(num) ? map.get(num).lastSpoken : undefined,
    lastSpoken: turn,
  });
  return num;
};

const next = (entry) => entry.lastSpoken - entry.beforeLastSpoken;

// OOP
class Game {
  constructor(input, limit) {
    this.limit = limit;
    this.history = input.reduce(
      (map, cur, index) => map.set(cur, { lastSpoken: index }),
      new Map()
    );
    this.lastNum = input[input.length - 1];
  }

  play() {
    for (let turn = this.history.size; turn < this.limit; turn++) {
      this.last.beforeLastSpoken !== undefined
        ? (this.lastNum = this.update(this.next, turn))
        : (this.lastNum = this.update(0, turn));
    }
    return this.lastNum;
  }

  get next() {
    return this.last.lastSpoken - this.last.beforeLastSpoken;
  }

  get last() {
    return this.history.get(this.lastNum);
  }

  update(num, turn) {
    this.history.set(num, {
      beforeLastSpoken: this.history.has(num)
        ? this.history.get(num).lastSpoken
        : undefined,
      lastSpoken: turn,
    });
    return num;
  }
}

export { play, Game };
