import {parseCrates, parseMove, topCrates} from "./helpers.js";

export default function partOne(input) {
  let [crates, i] = parseCrates(input);

  while (input[i]) {
    const [num , from , to] = parseMove(input[i]);
    for (let j = 0; j < num; j++) {
      const crate = crates[from].shift()
      crates[to].unshift(crate);
    }
    i++;
  }

  return topCrates(crates);
}

partOne.description = 'After the rearrangement procedure completes, what crate ends up on top of each stack?';
partOne.expected = 'CMZ';
