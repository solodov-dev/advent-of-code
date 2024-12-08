const COLORS = {
  red: 12,
  green: 13,
  blue: 14,
};

export default (input) =>
  input
    .split("\n")
    .filter(Boolean)
    .reduce((acc, line) => parseGame(line) + acc, 0);

const getGameID = (input) => Number(input.match(/Game (\d+):/)[1]);

const getColorReg = (color) => new RegExp(`\\d+ ${color}`, "g");

const getNumber = (s) => Number(s.split(" ")[0]);

const checkColor = (line, color, max) => {
  const nums = line.match(getColorReg(color)).map(getNumber);
  for (const num of nums) {
    if (num > max) {
      return false;
    }
  }
  return true;
};

const parseGame = (line) => {
  for (const [color, max] of Object.entries(COLORS)) {
    if (!checkColor(line, color, max)) {
      return 0;
    }
  }
  return getGameID(line);
};
