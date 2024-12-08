export default (input) => {
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (+input[i - 1] < +input[i]) count++;
  }
  return count;
};
