import { GAME, DIFFICULTY, NODE_STATUS } from "../actions/gameActions";
import { createMineMap } from "../utils";

const defaultState = {
  gameStatus: false,
  rows: 20,
  columns: 20,
  difficulty: "easy",
  mines: 60,
  get nodesMap() {
    return createMineMap(this.rows, this.columns, this.mines);
  },
  get nodesStatus() {
    return Array(this.rows * this.columns).fill(0);
  },
};

export const minesweeperReducer = (state = defaultState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case GAME:
      newState.gameStatus = action.bool;
      break;
    case DIFFICULTY:
      newState.difficulty = action.str;
      if (action.str === "easy") {
        newState.mines = 60;
      } else if (action.str === "medium") {
        newState.mines = 80;
      } else {
        newState.mines = 100;
      }
      break;
    case NODE_STATUS:
      newState.nodesStatus[action.index] = action.status;
      break;
    default:
      return state;
  }

  return newState;
};
