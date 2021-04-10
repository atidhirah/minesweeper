import React from "react";

class MineNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "close",
      value: this.props.val,
      display_value: "",
    };

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick(e) {
    console.log(e.button);
    if (this.state.status === "close") {
      this.setState({
        status: "open",
        display_value: this.state.value,
      });
    }
  }

  handleRightClick(e) {
    e.preventDefault();
    if (this.state.status === "close") {
      this.setState({
        display_value: "O",
      });
    }
  }

  render() {
    return (
      <li>
        <div
          id={this.props.id}
          className="node"
          onClick={this.handleLeftClick}
          onContextMenu={this.handleRightClick}
        >
          {this.state.display_value}
        </div>
      </li>
    );
  }
}

export default MineNode;
