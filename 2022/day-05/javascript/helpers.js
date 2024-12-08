export function parseCrates(input) {
  let i = 0;
  while (input[i]) i++;
  const size = Number(input[i - 1].at(-1));

  const crates = new Array(size).fill(0).map(() => []);
  for (const line of input) {
    for (let i = 1; i <= 4 * size; i += 4) {
      const crate = line[i];
      if (crate && crate !== ' ') {
        crates[Math.floor(i / 4)].push(crate);
      }
    }
  }
  i++;
  return [crates, i];
}

export function parseMove(line) {
  const regex = /move (\d+) from (\d+) to (\d+)/;
  const [_, num, from , to] = regex.exec(line);
  return [num, from - 1, to - 1].map(Number);
}

export const topCrates = (crates) => crates.reduce((acc, cur) => acc + cur[0], '');