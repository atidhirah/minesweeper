import React from "react";
import { getNodesAround } from "../utils";

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
    if (this.state.status === "closed") {
      this.setState(
        {
          status: "opened",
          display_value: this.state.value,
        },
        () => {
          if (this.state.value === "") {
            const id = e.target.id;
            const nodesAround = getNodesAround(
              parseInt(id),
              this.props.rows,
              this.props.columns
            );
            nodesAround.forEach((node) => {
              if (node !== -1) {
                document.getElementById(node.toString()).click();
              }
            });
          }
        }
      );
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
    let className = "node";
    if (this.state.status === "opened") {
      if (this.state.value === "X") {
        className += " opened-bomb";
      } else {
        className += " opened-node";
      }
    }

    return (
      <li>
        <div
          id={this.props.id}
          className={className}
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
