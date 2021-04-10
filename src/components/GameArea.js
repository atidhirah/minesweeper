import React from "react";

import MineNode from "./MineNode";

class GameArea extends React.Component {
  render() {
    const nodes = Array(400)
      .fill(0)
      .map((_, i) => {
        const keyId = `node-${i}`;
        return <MineNode key={keyId} id={i.toString()} val="X" />;
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
