/* 
  This function will return an array of nodes id
  that are around the node input. Starting from 
  top left, top, top right, left, right, btm left, btm, btm right.
  Node id will become -1 if there is no node in that position.
*/
export const getNodesAround = (pos, r, c) => {
  const max = r * c - 1;
  const arr = [
    pos - c - 1,
    pos - c,
    pos - c + 1,
    pos - 1,
    pos + 1,
    pos + c - 1,
    pos + c,
    pos + c + 1,
  ];

  // Top Left
  arr[0] = arr[0] < 0 || arr[0] % c === c - 1 ? -1 : arr[0];
  // Top
  arr[1] = arr[1] < 0 ? -1 : arr[1];
  // Top Right
  arr[2] = arr[2] < 0 || arr[2] % c === 0 ? -1 : arr[2];
  // Left
  arr[3] = arr[3] % c === c - 1 ? -1 : arr[3];
  // Right
  arr[4] = arr[4] % c === 0 ? -1 : arr[4];
  // Bottom Left
  arr[5] = arr[5] > max || arr[5] % c === c - 1 ? -1 : arr[5];
  // Bottom
  arr[6] = arr[6] > max ? -1 : arr[6];
  // Bottom Right
  arr[7] = arr[7] > max || arr[7] % c === 0 ? -1 : arr[7];

  return arr;
};

/* 
  This function will create an array of objects that represent
  each node that exist ()

*/
export const createMineMap = (rows, columns, mines) => {
  const nodesCount = rows * columns;

  const minesPos = [];
  while (minesPos.length < mines) {
    const randNum = Math.floor(Math.random() * nodesCount);
    if (minesPos.indexOf(randNum) === -1) minesPos.push(randNum);
  }

  // Check a node, return true if its not a mine
  const checkNode = (pos) => {
    if (minesPos.indexOf(pos) !== -1) return false;
    return true;
  };

  const maps = Array(nodesCount).fill(0);

  minesPos.forEach((minePos) => {
    maps[minePos] = "X";

    const nodeAround = getNodesAround(minePos, rows, columns);
    nodeAround.forEach((node) => {
      if (checkNode(node)) {
        maps[node] += 1;
      }
    });
  });
  return maps;
};
