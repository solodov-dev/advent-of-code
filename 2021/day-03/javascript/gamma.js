export default (input) => {
  const len = input[0].length;
  const arr = new Array(len).fill(0);

  for (const line of input) {
    for (let i = 0; i < len; i++) {
      line[i] === "1" ? arr[i]++ : arr[i]--;
    }
  }

  return arr.map((num) => (num >= 0 ? "1" : "0")).join("");
};
