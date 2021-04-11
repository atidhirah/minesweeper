import React from "react";

import MineNode from "./MineNode";

class GameArea extends React.Component {
  render() {
    console.log(this.props.minesMap);
    const minesMap = this.props.minesMap;
    const nodes = minesMap.map((value, i) => {
      value = value === 0 ? "" : value;
      return <MineNode key={i.toString()} id={i.toString()} val={value} />;
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
