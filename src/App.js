import "./styles/app.scss";

import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import * as utils from "./utils";

import Board from "./components/Board";

const GAME = "GAME";
const DIFFICULTY = "DIFFICULTY";

const gameAction = (bool) => ({ type: GAME, bool });
const difficultyAction = (str) => ({ type: DIFFICULTY, str });

const defaultState = {
  gameStatus: false,
  rows: 20,
  columns: 20,
  difficulty: "easy",
  mines: 60,
  get minesMap() {
    return utils.createMineMap(this.rows, this.columns, this.mines);
  },
};

const minesweeperReducer = (state = defaultState, action) => {
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
    default:
      return state;
  }

  return newState;
};

const store = createStore(minesweeperReducer);

const ReactReduxProvider = Provider;

const mapsStateToProps = (state) => ({ gameData: state });
const mapsDispatchToProps = (dispatch) => {
  return {
    updateGameStatus: (bool) => {
      dispatch(gameAction(bool));
    },
    updateGameDifficulty: (difficulty) => {
      dispatch(difficultyAction(difficulty));
    },
  };
};

const Container = connect(mapsStateToProps, mapsDispatchToProps)(Board);

function App() {
  return (
    <ReactReduxProvider store={store}>
      <Container />
    </ReactReduxProvider>
  );
}

export default App;
