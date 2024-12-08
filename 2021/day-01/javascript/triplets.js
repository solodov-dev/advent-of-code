export default (input) => {
  const triplets = [];

  for (let i = 0; i < input.length - 2; i++)
    triplets.push(
      Number(input[i]) + Number(input[i + 1]) + Number(input[i + 2])
    );

  return triplets;
};
