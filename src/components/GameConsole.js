import React from "react";
import GameTime from "./GameTime";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMehBlank,
  faSmile,
  faDizzy,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";

class GameConsole extends React.Component {
  render() {
    let icon;
    switch (this.props.isGameWin) {
      case true:
        icon = <FontAwesomeIcon icon={faGrinStars} />;
        break;
      case false:
        icon = <FontAwesomeIcon icon={faDizzy} />;
        break;
      default:
        icon = <FontAwesomeIcon icon={faSmile} />;
    }

    if (this.props.gameStatus === "paused") {
      icon = <FontAwesomeIcon icon={faMehBlank} />;
    }

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
          {icon}
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
