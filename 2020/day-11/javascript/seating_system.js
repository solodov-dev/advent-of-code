const look = (seats, row, col, rowOffset, colOffset) => {
  const [nextRow, nextCol] = [row + rowOffset, col + colOffset];
  return seats[nextRow] && seats[nextRow][nextCol]
    ? seats[nextRow][nextCol]
    : null;
};

const lookDeep = (seats, row, col, rowOffset, colOffset) => {
  const [nextRow, nextCol] = [row + rowOffset, col + colOffset];
  if (seats[nextRow] && seats[nextRow][nextCol]) {
    const cur = seats[nextRow][nextCol];
    return cur === '.'
      ? lookDeep(seats, nextRow, nextCol, rowOffset, colOffset)
      : cur;
  }
  return null;
};

const directions = () => {
  const d = [-1, 0, 1];
  const newArr = d.flatMap((row) =>
    d.map((col) => ({ rowOffset: row, colOffset: col }))
  );
  newArr.splice(4, 1);
  return newArr;
};

const getVisibleSeats = (layout, row, col, watcher) =>
  directions()
    .map((d) => watcher(layout, row, col, d.rowOffset, d.colOffset))
    .filter((el) => el);

const walk = (layout, watcher, occupied) => {
  const newLayout = [];
  let replacements = 0;
  for (let [row, line] of layout.entries()) {
    newLayout.push([]);
    for (let [col, seat] of line.entries()) {
      const visibleSeats = getVisibleSeats(layout, row, col, watcher);
      let newSeat = seat;
      if (seat === 'L' && visibleSeats.every((seat) => seat !== '#')) {
        newSeat = '#';
        replacements++;
      } else if (
        seat === '#' &&
        visibleSeats.filter((seat) => seat === '#').length >= occupied
      ) {
        newSeat = 'L';
        replacements++;
      }
      newLayout[row].push(newSeat);
    }
  }
  return replacements ? walk(newLayout, watcher, occupied) : newLayout;
};

const seat = (input, watcher, occupied) => {
  const layout = input.map((line) => Array.from(line));
  return countOccupied(walk(layout, watcher, occupied));
};

const countOccupied = (layout) => layout.join().match(new RegExp(/#/g)).length;

export { seat, lookDeep, look };
