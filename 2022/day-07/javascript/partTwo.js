import {Filesystem} from "./helpers.js";

export default function partTwo(input) {
  const filesystem = new Filesystem(input);
  const spaceNeededForUpdate = filesystem.getSpaceForUpdate();
  return Math.min(...filesystem.getDirs((dir) => dir.size >= spaceNeededForUpdate));

}

partTwo.description = 'What is the total size of that directory?';
partTwo.expected = 24933642;
