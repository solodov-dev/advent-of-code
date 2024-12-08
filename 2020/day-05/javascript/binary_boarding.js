const getSeatId = (ticket) => {
  const [rows, cols] = [ticket.slice(0, 7), ticket.slice(7)];
  const row = binarySearch(rows, Array.from(Array(128).keys()));
  const col = binarySearch(cols, Array.from(Array(8).keys()));
  return row * 8 + col;
};

const binarySearch = (code, seats) => {
  if (seats.length === 1) return seats[0];
  return code[0] === 'L' || code[0] === 'F'
    ? binarySearch(code.slice(1), seats.slice(0, seats.length / 2))
    : binarySearch(code.slice(1), seats.slice(seats.length / 2));
};

const getHighestId = (file) =>
  Math.max(...file.map((ticket) => getSeatId(ticket)));

const findMySeat = (file) =>
  file
    .map((ticket) => getSeatId(ticket))
    .sort()
    .find((element, index, array) => array[index + 1] - element > 1) + 1;

export { binarySearch, getSeatId, getHighestId, findMySeat };
