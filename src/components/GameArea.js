import React from "react";

class GameArea extends React.Component {
  render() {
    const nodes = Array(400)
      .fill(0)
      .map((_, i) => {
        const keyId = `node-${i}`;
        return (
          <li key={keyId}>
            <div className="node"></div>
          </li>
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
