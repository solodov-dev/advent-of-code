export default (input) => {
  let sum = 0;
  let i = 0;

  while (sum >= 0) {
    input[i] === "(" ? sum++ : sum--;
    i++;
  }

  return i;
};

export const description =
  "What is the position of the character that causes Santa to first enter the basement?";
export const input = `()())`;
export const output = 5;
