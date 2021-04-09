import React from "react";

import GameConsole from "./GameConsole";
import GameArea from "./GameArea";

class Board extends React.Component {
  render() {
    return (
      <div id="board" className="board">
        <h1>MINESWEEPER</h1>
        <GameConsole />
        <GameArea />
      </div>
    );
  }
}

export default Board;
