import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 0;
  }

  render() {
    return (
      <div>
        <p id="time" className="time">
          {this.props.time}
        </p>
      </div>
    );
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.time !== this.props.time) {
      return true;
    }

    if (nextProps.gameStatus !== this.props.gameStatus) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    if (this.props.gameStatus === "started") {
      this.timer = setTimeout(
        () => this.props.handleTime(this.props.time + 1),
        1000
      );
    } else {
      clearTimeout(this.timer);
    }
  }
}

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
        <Timer
          gameStatus={this.props.gameStatus}
          time={this.props.time}
          handleTime={this.props.handleTime}
        />
      </div>
    );
  }
}

export default GameConsole;
