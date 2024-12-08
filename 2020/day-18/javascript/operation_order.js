const calculate = (expression, precedence) => {
  const inputArray = toExpressionArray(expression);
  const rpnExpression = toRPN(inputArray, precedence);
  return evalRPN(rpnExpression);
};

const evalRPN = (expression) => {
  const perform = { '+': (a, b) => a + b, '*': (a, b) => a * b };
  const numbers = [];
  for (let token of expression) {
    parseInt(token)
      ? numbers.push(token)
      : numbers.push(perform[token](...lastTwo(numbers)));
  }
  return numbers.pop();
};

const toExpressionArray = (input) =>
  input.replace(/\(/g, '( ').replace(/\)/g, ' )').split(' ');

const last = (arr) => arr[arr.length - 1];

const lastTwo = (arr) => [arr.pop(), arr.pop()];

const toRPN = (expressionArray, precedence) => {
  const OPS = { '+': precedence, '*': 1 };
  const output = [];
  const opsStack = [];
  for (let token of expressionArray) {
    parseInt(token) && output.push(+token);

    if (token in OPS) {
      while (last(opsStack) in OPS && OPS[token] <= OPS[last(opsStack)])
        output.push(opsStack.pop());
      opsStack.push(token);
    }

    token === '(' && opsStack.push(token);

    if (token === ')') {
      while (last(opsStack) !== '(') output.push(opsStack.pop());
      opsStack.pop();
    }
  }
  return output.concat(opsStack.reverse());
};

const run = (input, precedence) =>
  input.reduce((acc, line) => (acc += calculate(line, precedence)), 0);

export { calculate, run };
