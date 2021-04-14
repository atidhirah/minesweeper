import { GAME, DIFFICULTY, NODE_STATUS } from "../actions/gameActions";
import { createMineMap } from "../utils";

const defaultState = {
  gameStatus: false,
  rows: 20,
  columns: 20,
  difficulty: "easy",
  mines: 60,
};

export const minesweeperReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GAME:
      return { ...state, gameStatus: action.bool };
    case DIFFICULTY:
      let mineCount =
        action.str === "easy" ? 60 : action.str === "medium" ? 80 : 100;

      return { ...state, difficulty: action.str, mines: mineCount };

    case NODE_STATUS:
      const arr = state.nodesStatus;
      arr[action.index] = action.status;
      return { ...state, nodesStatus: arr };

    default:
      const nodesMap = createMineMap(state.rows, state.columns, state.mines);
      const nodesStatus = Array(state.rows * state.columns).fill(0);

      return { ...state, nodesMap: nodesMap, nodesStatus: nodesStatus };
  }
};
