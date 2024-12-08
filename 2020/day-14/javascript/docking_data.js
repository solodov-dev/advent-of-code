class Program1 {
  memory = {};
  pattern = new RegExp(/mem\[(\d+)\] = (\d+)/);

  execute(input) {
    for (let line of input) {
      if (/mask/.test(line)) {
        const [_, pattern] = /mask = (\w+)/.exec(line);
        this.updateMask(pattern);
      } else {
        this.writeToMemory(line);
      }
    }
    return this.sum();
  }

  sum() {
    let sum = 0;
    for (let value of Object.values(this.memory)) {
      sum += parseInt(value.join(''), 2);
    }
    return sum;
  }

  updateMask(pattern) {
    this.mask = Array.from(pattern).reduce(
      (obj, cur, index) =>
        cur === 'X' ? { ...obj } : { ...obj, [index]: +cur },
      {}
    );
  }

  writeToMemory(line) {
    const [_, address, value] = this.pattern.exec(line);
    let binary = this.toBinaryArray(value);
    this.memory[address] = this.applyMask(binary);
  }

  applyMask(arr) {
    const res = [...arr];
    for (let [key, value] of Object.entries(this.mask)) {
      res[+key] = value;
    }
    return res;
  }

  toBinaryArray(value) {
    return Array.from((+value).toString(2).padStart(36, '0'));
  }
}

class Program2 extends Program1 {
  updateMask(pattern) {
    this.mask = Array.from(pattern);
  }

  applyMask(arr) {
    let res = [...arr];
    this.mask.forEach((val, index) => {
      if (val === 'X' || val === '1') res[index] = val;
    });
    return res;
  }

  writeToMemory(line) {
    const [_, address, value] = this.pattern.exec(line);
    let binary = this.toBinaryArray(address);
    let binaryKey = this.applyMask(binary);
    const possibleKeys = this.generatePossibleKeys(binaryKey);
    possibleKeys.forEach(
      (key) =>
        (this.memory[parseInt(key.join(''), 2)] = this.toBinaryArray(value))
    );
  }

  generatePossibleKeys(binaryKey) {
    let pushed = true;
    let possibleKeys = [binaryKey.map((el) => el)];
    while (pushed) {
      pushed = false;
      possibleKeys.forEach((key, keyIndex) => {
        let index = key.indexOf('X');
        if (index !== -1) {
          key[index] = '0';
          possibleKeys.push(key.map((el) => el));
          key[index] = '1';
          possibleKeys.push(key.map((el) => el));
          pushed = true;
          possibleKeys.splice(keyIndex, 1);
        }
      });
    }
    return possibleKeys;
  }
}

const program1 = new Program1();
const program2 = new Program2();

export { program1, program2 };
