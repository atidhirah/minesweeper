export const createMineMap = (rows, columns, mines) => {
  const nodesCount = rows * columns;

  const minesPos = [];
  while (minesPos.length < mines) {
    const randNum = Math.floor(Math.random() * nodesCount);
    if (minesPos.indexOf(randNum) === -1) minesPos.push(randNum);
  }

  return minesPos;
};
