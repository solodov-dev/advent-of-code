export default (input) =>
  input.split("").reduce((acc, cur) => (cur === "(" ? acc + 1 : acc - 1), 0);

export const description = "To what floor do the instructions take Santa?";
export const input = `))(((((`;
export const output = 3;
