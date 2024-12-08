process.stdin.on('data', (data) => {
  const left = [];
  const appearance = {};

  data.toString().trim().split('\n').forEach(line => {
    const [val1, val2] = line.split(/\s+/).map(Number);
    left.push(val1);
    appearance[val2] = (appearance[val2] || 0) + 1;
  });

  console.log(left.reduce((acc, cur) => acc + cur * (appearance[cur] || 0), 0));
})
