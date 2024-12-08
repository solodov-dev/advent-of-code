import {uniqueSequenceMarker} from "./helpers.js";

export default function partTwo(input) {
  const signal = input[0];
  return uniqueSequenceMarker(signal, 14);
}

partTwo.description = 'How many characters need to be processed before the first start-of-message marker is detected?';
partTwo.expected = 19;
