import React from "react";

import GameConsole from "./GameConsole";
import GameArea from "./GameArea";

class Board extends React.Component {
  render() {
    console.log(this.props.gameData);
    const gameData = this.props.gameData;
    return (
      <div id="board" className="board">
        <h1>MINESWEEPER</h1>
        <GameConsole />
        <GameArea
          rows={gameData.rows}
          columns={gameData.columns}
          minesMap={gameData.minesMap}
        />
      </div>
    );
  }
}

export default Board;
