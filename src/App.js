import "./styles/app.scss";

import React from "react";
import { createStore } from "redux";
import { minesweeperReducer } from "./reducers/gameReducer";
import * as Action from "./actions/gameActions";
import { Provider, connect } from "react-redux";
import Board from "./components/Board";

const store = createStore(minesweeperReducer);

const mapsStateToProps = (state) => ({ gameData: state });
const mapsDispatchToProps = (dispatch) => {
  return {
    updateGameTime: (second) => {
      dispatch(Action.timeAction(second));
    },
    updateGameStatus: (bool) => {
      dispatch(Action.gameAction(bool));
    },
    updateGameDifficulty: (difficulty) => {
      dispatch(Action.difficultyAction(difficulty));
    },
    updateNodeStatus: (i, num) => {
      dispatch(Action.nodeStatusAction(i, num));
    },
    resetGame: () => {
      dispatch(Action.resetAction());
    },
  };
};

const Container = connect(mapsStateToProps, mapsDispatchToProps)(Board);

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
