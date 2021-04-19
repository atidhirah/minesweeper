import React from "react";

import GameConsole from "./GameConsole";
import GameArea from "./GameArea";

class Board extends React.Component {
  render() {
    const gameData = this.props.gameData;
    return (
      <div id="board" className="board">
        <GameConsole
          gameStatus={gameData.gameStatus}
          isGameWin={gameData.isGameWin}
          time={gameData.time}
          mines={gameData.mines}
          handleTime={this.props.updateGameTime}
          handleReset={this.props.resetGame}
        />
        <GameArea
          gameData={gameData}
          nodesMap={gameData.nodesMap}
          handleNodeStatus={this.props.updateNodeStatus}
        />
      </div>
    );
  }
}

export default Board;
