export const GAME = "GAME";
export const TIME = "TIME";
export const DIFFICULTY = "DIFFICULTY";
export const NODE_STATUS = "NODE_STATUS";

export const gameAction = (bool) => ({ type: GAME, bool });
export const timeAction = (second) => ({ type: TIME, second });
export const difficultyAction = (str) => ({ type: DIFFICULTY, str });
export const nodeStatusAction = (i, num) => ({
  type: NODE_STATUS,
  index: i,
  status: num,
});
