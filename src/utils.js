export const createMineMap = (rows, columns, mines) => {
  const nodesCount = rows * columns;

  const minesPos = [];
  while (minesPos.length < mines) {
    const randNum = Math.floor(Math.random() * nodesCount);
    if (minesPos.indexOf(randNum) === -1) minesPos.push(randNum);
  }

  const checkNode = (pos) => {
    if (minesPos.indexOf(pos) !== -1) return false;
    return true;
  };

  const maps = Array(nodesCount).fill(0);
  minesPos.forEach((minePos) => {
    maps[minePos] = "X";

    // Left
    const leftPos = minePos - 1;
    if (checkNode(leftPos)) {
      if (leftPos % columns !== columns - 1) {
        maps[leftPos] += 1;
      }
    }

    // Right
    const rightPos = minePos + 1;
    if (checkNode(rightPos)) {
      if (rightPos % columns !== 0) {
        maps[rightPos] += 1;
      }
    }

    // Top
    const topPos = minePos - columns;
    if (checkNode(topPos)) {
      if (topPos >= 0) {
        maps[topPos] += 1;
      }
    }

    // Top Left
    const topLeftPos = minePos - (columns + 1);
    if (checkNode(topLeftPos)) {
      if (topLeftPos >= 0 && topLeftPos % columns !== columns - 1) {
        maps[topLeftPos] += 1;
      }
    }

    // Top Right
    const topRightPos = minePos - (columns - 1);
    if (checkNode(topRightPos)) {
      if (topRightPos >= 0 && topRightPos % columns !== 0) {
        maps[topRightPos] += 1;
      }
    }

    // Bottom
    const bottomPos = minePos + columns;
    if (checkNode(bottomPos)) {
      if (bottomPos < nodesCount) {
        maps[bottomPos] += 1;
      }
    }

    // Bottom Left
    const bottomLeftPos = minePos + (columns - 1);
    if (checkNode(bottomLeftPos)) {
      if (
        bottomLeftPos < nodesCount &&
        bottomLeftPos % columns !== columns - 1
      ) {
        maps[bottomLeftPos] += 1;
      }
    }

    // Bottom Right
    const bottomRightPos = minePos + (columns + 1);
    if (checkNode(bottomRightPos)) {
      if (bottomRightPos < nodesCount && bottomRightPos % columns !== 0) {
        maps[bottomRightPos] += 1;
      }
    }
  });

  return maps;
};
