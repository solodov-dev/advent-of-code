export function uniqueSequenceMarker(input, sequenceLength) {
  for (let i = 0; i < input.length - sequenceLength; i++) {
    const end = i + sequenceLength;
    const sequence = input.slice(i, end);
    if (sequence.length === new Set(sequence).size) {
      return end;
    }
  }
}