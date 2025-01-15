export const calcMenuItemPosList = (
  itemSize: number,
  itemLength: number,
  adjustDefault: number
) => {
  const unitRadius = Math.PI / 2 / (itemLength - 1);
  const result: [number, number][] = [];
  for (let i = 0; i < itemLength; i++) {
    const radius = unitRadius * i;
    const adjust = i % 2 === 0 ? 1 : adjustDefault;
    result.push([
      -Math.sin(radius) * itemSize * adjust,
      -Math.cos(radius) * itemSize * adjust,
    ]);
  }
  return result;
};
