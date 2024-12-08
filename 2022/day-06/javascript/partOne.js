import {uniqueSequenceMarker} from "./helpers.js";

export default function partOne(input) {
  const signal = input[0];
  return uniqueSequenceMarker(signal, 4);
}

partOne.description = 'How many characters need to be processed before the first start-of-packet marker is detected?';
partOne.expected = 7;
