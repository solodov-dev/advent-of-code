const sub = {
  horizontal: 0,
  depth: 0,
  forward(unit) {
    this.horizontal += unit;
  },

  down(unit) {
    this.depth += unit;
  },

  up(unit) {
    this.depth -= unit;
  },

  split(str) {
    let [command, unit] = str.split(" ");
    unit = Number(unit);
    return [command, unit];
  },

  sail(input) {
    for (const line of input) {
      const [command, unit] = this.split(line);
      this[command](unit);
    }
    return this.horizontal * this.depth;
  }
};

export default sub;
