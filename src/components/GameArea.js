import React from "react";

import MineNode from "./MineNode";

class GameArea extends React.Component {
  render() {
    console.log(this.props.minesMap);
    const minesMap = this.props.minesMap;
    const nodes = Array(400)
      .fill(0)
      .map((_, i) => {
        let val = minesMap.indexOf(i) !== -1 ? "X" : "";
        return <MineNode key={i.toString()} id={i.toString()} val={val} />;
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
