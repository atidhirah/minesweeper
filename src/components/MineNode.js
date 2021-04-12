import React from "react";
import { getNodesAround } from "../utils";

class MineNode extends React.Component {
  constructor(props) {
    super(props);

    this.openNodesAround = this.openNodesAround.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  openNodesAround() {
    const id = parseInt(this.props.id);
    const nodesAround = getNodesAround(id, this.props.rows, this.props.columns);
    nodesAround.forEach((node) => {
      if (node !== -1) {
        this.props.handleStatus(node, 1);
      }
    });
  }

  handleLeftClick(e) {
    const id = parseInt(e.target.id);
    if (this.props.status === 0) {
      this.props.handleStatus(id, 1);

      if (this.props.val === "") {
        this.openNodesAround();
      }
    }
  }

  handleRightClick(e) {
    e.preventDefault();
    const id = parseInt(e.target.id);
    const status = this.props.status;
    if (status === 0) {
      this.props.handleStatus(id, 2);
    } else if (status === 2) {
      this.props.handleStatus(id, 0);
    }
  }

  render() {
    let className = "node";
    let display = "";
    if (this.props.status === 1) {
      if (this.props.val === "X") {
        className += " opened-bomb";
        display = "X";
      } else {
        className += " opened-node";
        display = this.props.val;
      }
    }

    if (this.props.status === 2) {
      className += " checked-node";
      display = "O";
    }

    return (
      <li>
        <div
          id={this.props.id}
          className={className}
          onClick={this.handleLeftClick}
          onContextMenu={this.handleRightClick}
        >
          {display}
        </div>
      </li>
    );
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.status !== this.props.status) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    if (this.props.val === "") {
      this.openNodesAround();
    }
  }
}

export default MineNode;
