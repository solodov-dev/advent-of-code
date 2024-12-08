export default (input) =>
  input
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const numbers = line.replaceAll(/\D/g, "");
      return numbers[0] + numbers[numbers.length - 1];
    })
    .reduce((acc, cur) => acc + Number(cur), 0);
