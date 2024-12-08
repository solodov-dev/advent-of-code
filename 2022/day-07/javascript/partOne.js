import { Filesystem } from "./helpers.js";

export default function partOne(input) {
  const fileSystem = new Filesystem(input);
  return fileSystem.getDirs((dir) => dir.size <= 100000)
    .reduce((acc, cur) => acc + cur);
}

partOne.description = 'What is the sum of the total sizes of those directories?';
partOne.expected = 95437;
