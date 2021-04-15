import React from "react";

import GameConsole from "./GameConsole";
import GameArea from "./GameArea";

class Board extends React.Component {
  render() {
    const gameData = this.props.gameData;
    console.log(gameData.gameStatus);
    return (
      <div id="board" className="board">
        <h1>MINESWEEPER</h1>
        <GameConsole mines={gameData.mines} />
        <GameArea
          gameData={gameData}
          handleNodeStatus={this.props.updateNodeStatus}
        />
      </div>
    );
  }
}

export default Board;
