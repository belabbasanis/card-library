export const getRandomPositions = (count: number) =>
  Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));
