export default (input) => {
  const lines = input.split("\n");
  const cards = new Array(lines.length).fill(1);
  lines.forEach((card, index) => parseCard(card, index, cards));
  return cards.reduce((a, b) => a + b, 0);
};

const parseCard = (card, index, cards) => {
  const [_, numbers] = card.split(": ");
  let [winningNumbers, cardNumbers] = numbers
    .split(" | ")
    .map((n) => n.split(/\s+/));
  winningNumbers = new Set(winningNumbers);
  const match = [...cardNumbers].filter((c) => winningNumbers.has(c)).length;
  for (let i = index + 1; i < index + match + 1; i++) {
    cards[i] += cards[index];
  }
};

export const description =
  "Take a seat in the large pile of colorful cards. How many points are they worth in total?";
export const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
export const output = 30;

