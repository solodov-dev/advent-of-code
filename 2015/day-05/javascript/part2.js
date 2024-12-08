export default (input) => input.split("\n").filter(filterFunction).length;

const filterFunction = (line) => {
  let has_pair = /.*(\w\w).*\1/;
  let has_middle = /.*(\w).\1/;

  return has_pair.test(line) && has_middle.test(line);
};

export const description = "";
export const input = `qjhvhtzxzqqjkmpb`;
export const output = 1;

