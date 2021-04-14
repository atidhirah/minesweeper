import React from "react";

import MineNode from "./MineNode";

class GameArea extends React.Component {
  render() {
    const gameData = this.props.gameData;
    const nodes = gameData.nodesMap.map((value, i) => {
      let val = value === 0 ? "" : value;
      return (
        <MineNode
          key={i.toString()}
          id={i.toString()}
          rows={gameData.rows}
          columns={gameData.columns}
          mines={gameData.mines}
          val={val}
          status={gameData.nodesStatus[i]}
          handleStatus={this.props.handleNodeStatus}
        />
      );
    });

    return (
      <div id="game-area" className="game-area">
        <ul id="nodes" className="nodes-container">
          {nodes}
        </ul>
      </div>
    );
  }
}

export default GameArea;
