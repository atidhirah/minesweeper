import React from "react";

class MineNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "closed",
      value: this.props.val,
      display_value: "",
    };

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick(e) {
    console.log(e.target.id);
    if (this.state.status === "closed") {
      this.setState({
        status: "opened",
        display_value: this.state.value,
      });
    }
  }

  handleRightClick(e) {
    e.preventDefault();
    const status = this.state.status;
    if (status === "closed") {
      this.setState({
        status: "protected",
        display_value: "O",
      });
    } else if (status === "protected") {
      this.setState({
        status: "closed",
        display_value: "",
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
