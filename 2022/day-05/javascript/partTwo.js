import {parseCrates, parseMove, topCrates} from "./helpers.js";

export default function partTwo(input) {
  let [crates, i] = parseCrates(input);

  while (input[i]) {
    const [num , from , to] = parseMove(input[i]);
    const temp = [];
    for (let j = 0; j < num; j++) {
      const crate = crates[from].shift()
      temp.push(crate);
    }
    crates[to].unshift(...temp);
    i++;
  }

  return topCrates(crates);
}

partTwo.description = 'After the rearrangement procedure completes, what crate ends up on top of each stack?';
partTwo.expected = 'MCD';
