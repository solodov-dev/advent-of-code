export default (input) => {
  const grid = new Array(1000).fill(null).map(() => new Array(1000).fill(0));
  for (const line of input.split("\n")) {
    const [command, from, to] = line
      .replace("turn ", "")
      .replace("through ", "")
      .split(" ");
    const [fromX, fromY, toX, toY] = [from, to]
      .join(",")
      .split(",")
      .map(Number);
    for (let i = fromX; i <= toX; i++) {
      for (let j = fromY; j <= toY; j++) {
        switch (command) {
          case "on":
            grid[i][j] += 1;
            break;
          case "off":
            if (grid[i][j] > 0) grid[i][j] -= 1;
            break;
          case "toggle":
            grid[i][j] += 2;
        }
      }
    }
  }
  return grid.flat().reduce((acc, cur) => acc + cur);
};

export const description = "";
export const input = `toggle 0,0 through 999,999`;
export const output = 2000000;
