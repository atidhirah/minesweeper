import React from "react";

class GameConsole extends React.Component {
  render() {
    return (
      <div id="game-console" className="game-console">
        <div>
          <p id="mine-left" className="mine-left">
            {this.props.mines}
          </p>
        </div>
        <button id="btn-game" className="btn-game">
          NEW GAME
        </button>
        <div>
          <p id="time" className="time">
            00:00
          </p>
        </div>
      </div>
    );
  }
}

export default GameConsole;
