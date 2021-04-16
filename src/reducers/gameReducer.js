import * as Action from "../actions/gameActions";
import { createMineMap, checkGameWin } from "../utils";

const defaultState = {
  gameStatus: "paused",
  time: 0,
  rows: 20,
  columns: 20,
  difficulty: "easy",
  mines: 60,
  isGameWin: undefined,
};

export const minesweeperReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Action.GAME:
      return { ...state, gameStatus: action.bool };

    case Action.TIME:
      return { ...state, time: action.second };

    case Action.DIFFICULTY:
      const mineCount =
        action.str === "easy" ? 60 : action.str === "medium" ? 80 : 100;
      const newNodesMap = createMineMap(state.rows, state.columns, mineCount);
      const newNodesStatus = Array(state.rows * state.columns).fill(0);
      return {
        ...state,
        difficulty: action.str,
        mines: mineCount,
        nodesMap: newNodesMap,
        nodesStatus: newNodesStatus,
      };

    case Action.NODE_STATUS:
      // The game timer will start when user clicking a node

      let gameStatus = "started";

      const status = action.status;
      const index = action.index;
      let mines = state.mines;
      // If user protecting/unprotecting a node, mines count
      // will increase(when unprotecting) / decrease(when protecting).
      mines = status === 0 ? mines + 1 : status === 2 ? mines - 1 : mines;

      const arrStatus = state.nodesStatus;
      const arrNodes = state.nodesMap;
      const nodeValue = arrNodes[index];
      let winStatus = undefined;

      // If user opening a node(status = 1) and its value is "X"(mine)
      // Open all mine and game is losing.
      if (status === 1 && nodeValue === "X") {
        arrNodes.forEach((val, i) => {
          if (val === "X") {
            arrStatus[i] = 1;
          }
        });
        mines = 0;
        gameStatus = "stopped";
        winStatus = false;
      }

      // Updating node status
      arrStatus[index] = status;

      // Game is a win if user open all nodes that is not a mine
      if (status === 1 && nodeValue !== "X") {
        if (checkGameWin(arrNodes, arrStatus)) {
          gameStatus = "stopped";
          winStatus = true;
        }
      }

      return {
        ...state,
        gameStatus: gameStatus,
        mines: mines,
        nodesStatus: arrStatus,
        isGameWin: winStatus,
      };

    default:
      const nodesMap = createMineMap(state.rows, state.columns, state.mines);
      const nodesStatus = Array(state.rows * state.columns).fill(0);

      return {
        ...state,
        nodesMap: nodesMap,
        nodesStatus: nodesStatus,
      };
  }
};
