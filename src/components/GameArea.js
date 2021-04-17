import React from "react";

import MineNode from "./MineNode";

class GameArea extends React.Component {
  render() {
    // Make an array of Node component
    const gameData = this.props.gameData;
    const nodes = gameData.nodesMap.map((value, i) => {
      let val = value === 0 ? "" : value;
      return (
        <MineNode
          key={i.toString()}
          id={i.toString()}
          gameStatus={gameData.gameStatus}
          rows={gameData.rows}
          columns={gameData.columns}
          mines={gameData.mines}
          val={val}
          status={gameData.nodesStatus[i]}
          handleStatus={this.props.handleNodeStatus}
        />
      );
    });

    // Add grid display style base on game columns
    const grid = {
      display: "grid",
      gridTemplateColumns: `repeat(${gameData.columns}, 1.5rem)`,
    };

    return (
      <div id="game-area" className="game-area">
        <ul id="nodes" className="nodes-container" style={grid}>
          {nodes}
        </ul>
      </div>
    );
  }
}

export default GameArea;
