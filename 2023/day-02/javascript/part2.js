export default (input) =>
  input
    .split("\n")
    .filter(Boolean)
    .reduce((acc, line) => parseGame(line) + acc, 0);

const getColorReg = (color) => new RegExp(`\\d+ ${color}`, "g");

const getNumber = (s) => Number(s.split(" ")[0]);

const maxColor = (line, color) => {
  const nums = line.match(getColorReg(color)).map(getNumber);
  return Math.max(...nums);
};

const parseGame = (line) =>
  ["red", "green", "blue"].reduce(
    (acc, color) => acc * maxColor(line, color),
    1,
  );
