import React from "react";

class GameTime extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 0;

    this.getTime = this.getTime.bind(this);
  }

  getTime() {
    let m = parseInt(this.props.time / 60);
    let s = this.props.time % 60;

    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    return `${m}:${s}`;
  }

  render() {
    return (
      <div>
        <p id="time" className="time">
          {this.getTime()}
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

export default GameTime;
