import React from "react";
import { getNodesAround } from "../utils";

/*
  This node component have 3 status that represent node state
  0 : Closed node, means it not yet opened or checked
  1 : Opened node, node will opened after left clicking on a node
  2 : Protected node, on this status node is still closed but cannot be opened
      User need to right click on a node to protect/unprotect node.
*/
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
    if (this.props.status === 0) {
      const id = parseInt(e.target.id);
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
    const [status, val] = [this.props.status, this.props.val];
    let [className, display] = ["node", ""];

    if (status === 1) {
      if (val === "X") {
        className += " opened-bomb";
        display = "X";
      } else {
        className += " opened-node";
        display = this.props.val;
      }
    }

    if (status === 2) {
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
    if (this.props.val === "" && this.props.status === 1) {
      this.openNodesAround();
    }
  }
}

export default MineNode;
