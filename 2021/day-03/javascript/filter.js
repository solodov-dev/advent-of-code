export default (input, fn) => {
  let answer = input;

  for (let i = 0; i < input[0].length; i++) {
    const maskBits = fn(answer);
    answer = answer.filter(line => line[i] === maskBits[i]);
    if (answer.length === 1) return answer[0];
  } 
}
