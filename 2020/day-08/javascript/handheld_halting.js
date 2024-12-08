const loop = (input) => {
  const walk = (accumulator, index, visited) => {
    const [command, value] = read(input[index]);
    const [acc, nextIndex] = execute(command, accumulator, value, index);
    return visited.includes(nextIndex)
      ? acc
      : walk(acc, nextIndex, [...visited, nextIndex]);
  };

  return walk(0, 0, []);
};

const read = (line) => {
  const [, command, number] = /(\w{3}) ([+-]\d+)/.exec(line);
  return [command, Number(number)];
};

const execute = (cmd, acc, value, index) => {
  switch (cmd) {
    case 'acc':
      return [acc + value, index + 1];
    case 'nop':
      return [acc, index + 1];
    case 'jmp':
      return [acc, index + value];
  }
};

const fix = (input) => {
  const walk = (accumulator, index, visited, newInput) => {
    const [command, value] = read(newInput[index]);
    const [acc, nextIndex] = execute(command, accumulator, value, index);
    if (visited.includes(nextIndex)) {
      return NaN;
    } else if (nextIndex >= newInput.length) {
      return acc;
    } else {
      return walk(acc, nextIndex, [...visited, nextIndex], newInput);
    }
  };

  let res;
  let lastIndex = 0;
  let newInput;
  const inputStr = input.join('|');
  let [newCMD, oldCMD] = ['nop', 'jmp'];

  do {
    lastIndex = inputStr.indexOf(oldCMD, lastIndex);
    lastIndex === -1
      ? ([oldCMD, newCMD] = [newCMD, oldCMD])
      : (newInput = replaceAt(inputStr, lastIndex, newCMD).split('|'));
    res = walk(0, 0, [], newInput);
    lastIndex++;
  } while (isNaN(res));

  return res;
};

const replaceAt = (str, index, replacement) =>
  str.substr(0, index) + replacement + str.substr(index + replacement.length);

export { loop, fix };
