process.stdin.on('data', (data) => {
  const list1 = [];
  const list2 = [];

  data.toString().trim().split('\n').forEach(line => {
    const [val1, val2] = line.split(/\s+/).map(Number);
    list1.push(val1);
    list2.push(val2);
  });

  list1.sort();
  list2.sort();

  console.log(list1.reduce((acc, _, idx) => acc + Math.abs(list1[idx] - list2[idx]), 0));
})
