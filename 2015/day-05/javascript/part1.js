export default (input) => input.split("\n").filter(filterFunction).length;

const filterFunction = (line) => {
  const has_bads = /(ab|cd|pq|xy)/;
  const has_double = /(.)\1/;
  const three_vowels = /^(.*[aeuio].*){3,}$/;

  return (
    !has_bads.test(line) && has_double.test(line) && three_vowels.test(line)
  );
};

export const description = "";
export const input = `ugknbfddgicrmopn`;
export const output = 1;

