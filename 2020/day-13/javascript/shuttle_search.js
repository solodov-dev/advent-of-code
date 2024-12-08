const earliest = (input) => {
  const timestamp = +input[0];
  const busses = input[1].match(/\d+/g).map((b) => +b);
  const waitingTimes = busses.map((b) => offset(timestamp, b));
  const minTime = Math.min(...waitingTimes);
  return busses[waitingTimes.indexOf(minTime)] * minTime;
};

const offset = (datestamp, bus) =>
  parseInt(datestamp / bus) * bus + bus - datestamp;

const timestamp = (input) => {
  const busses = input[1].split(',').map((el) => (el === 'x' ? el : +el));
  let t = 1;
  let i = 0;
  let s = 1;
  while (i < busses.length) {
    if (busses[i] === 'x') i++;
    else {
      if ((t + i) % busses[i] === 0) {
        s *= busses[i];
        i++;
      } else {
        t += s;
      }
    }
  }
  return t;
};

export { earliest, timestamp };
