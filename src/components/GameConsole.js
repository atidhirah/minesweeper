import React from "react";
import GameTime from "./GameTime";

class GameConsole extends React.Component {
  render() {
    return (
      <div id="game-console" className="game-console">
        <div>
          <p id="mine-left" className="mine-left">
            {this.props.mines}
          </p>
        </div>
        <button
          id="btn-game"
          className="btn-game"
          onClick={this.props.handleReset}
        >
          NEW GAME
        </button>
        <GameTime
          gameStatus={this.props.gameStatus}
          time={this.props.time}
          handleTime={this.props.handleTime}
        />
      </div>
    );
  }
}

export default GameConsole;
