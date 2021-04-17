import React from "react";
import { getNodesAround } from "../utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag } from "@fortawesome/free-solid-svg-icons";

/*
  This node component have 3 status that represent node state
  0 : Closed node, means it not yet opened or checked
  1 : Opened node, node will opened after left clicking on a node
  2 : Protected node, on this status node is still closed but cannot be opened
      User need to right click on a node to protect/unprotect node.
*/
class MineNode extends React.Component {
  // Open nodes around this node
  openNodesAround() {
    const id = parseInt(this.props.id);
    const nodesAround = getNodesAround(id, this.props.rows, this.props.columns);
    nodesAround.forEach((node) => {
      if (node !== -1) {
        this.props.handleStatus(node, 1);
      }
    });
  }

  // Open this node and show its value
  openNode(e) {
    if (this.props.gameStatus !== "stopped") {
      const id = parseInt(e.target.id);
      this.props.handleStatus(id, 1);

      if (this.props.val === "") {
        this.openNodesAround();
      }
    }
  }

  // Protect this node so it cannot be opened
  protectNode(e) {
    e.preventDefault();
    if (this.props.gameStatus !== "stopped" && this.status !== 1) {
      this.props.handleStatus(this.props.id, 2);
    }
  }

  // Unprotect this node so it can be opened
  unprotectNode(e) {
    e.preventDefault();
    if (this.props.gameStatus !== "stopped") {
      this.props.handleStatus(this.props.id, 0);
    }
  }

  render() {
    const [status, val] = [this.props.status, this.props.val];

    // Render Protected node
    if (status === 2) return this.renderFlag();

    // Render opened node that its value is a bomb
    if (status === 1 && val === "X") return this.renderBomb();

    // Render opened node that is not a bomb
    if (status === 1) return this.renderOpenedNode();

    // Render unopened node
    return (
      <li>
        <div
          id={this.props.id}
          className="node"
          onClick={(e) => this.openNode(e)}
          onContextMenu={(e) => this.protectNode(e)}
        ></div>
      </li>
    );
  }

  renderOpenedNode() {
    return (
      <li>
        <div
          id={this.props.id}
          className="node opened-node"
          onContextMenu={(e) => e.preventDefault()}
        >
          {this.props.val}
        </div>
      </li>
    );
  }

  renderBomb() {
    return (
      <li>
        <div
          id={this.props.id}
          className="node opened-bomb"
          onContextMenu={(e) => e.preventDefault()}
        >
          <FontAwesomeIcon icon={faBomb} />
        </div>
      </li>
    );
  }

  renderFlag() {
    return (
      <li>
        <div
          id={this.props.id}
          className="node checked-node"
          onContextMenu={(e) => this.unProtectNode(e)}
        >
          <FontAwesomeIcon icon={faFlag} />
        </div>
      </li>
    );
  }

  // Just update this component if its status is changed
  shouldComponentUpdate(nextProps) {
    if (nextProps.status !== this.props.status) {
      return true;
    }
    return false;
  }

  // If this node is opened and its value is empty string
  // then open nodes around this node too
  componentDidUpdate() {
    if (this.props.val === "" && this.props.status === 1) {
      this.openNodesAround();
    }
  }
}

export default MineNode;
