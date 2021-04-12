import React from "react";

import GameConsole from "./GameConsole";
import GameArea from "./GameArea";

class Board extends React.Component {
  render() {
    const gameData = this.props.gameData;
    return (
      <div id="board" className="board">
        <h1>MINESWEEPER</h1>
        <GameConsole />
        <GameArea
          rows={gameData.rows}
          columns={gameData.columns}
          nodesMap={gameData.nodesMap}
          nodesStatus={gameData.nodesStatus}
          handleNodeStatus={this.props.updateNodeStatus}
        />
      </div>
    );
  }
}

export default Board;
