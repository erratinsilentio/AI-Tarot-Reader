type GenerateCardsFunc = () => number[];

export default function generateSetOfCards<GenerateCardsFunc>() {
  const numbers = new Set();

  while (numbers.size < 10) {
    numbers.add(Math.floor(Math.random() * (20 - 0 + 1)) + 0);
  }

  let cards = Array.from(numbers);
  return cards;
}
