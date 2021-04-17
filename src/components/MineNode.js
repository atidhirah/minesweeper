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
  openNodesAround() {
    const id = parseInt(this.props.id);
    const nodesAround = getNodesAround(id, this.props.rows, this.props.columns);
    nodesAround.forEach((node) => {
      if (node !== -1) {
        this.props.handleStatus(node, 1);
      }
    });
  }

  openNode(e) {
    if (this.props.gameStatus !== "stopped") {
      const id = parseInt(e.target.id);
      this.props.handleStatus(id, 1);

      if (this.props.val === "") {
        this.openNodesAround();
      }
    }
  }

  checkNode(e) {
    e.preventDefault();
    if (this.props.gameStatus !== "stopped" && this.status !== 1) {
      this.props.handleStatus(this.props.id, 2);
    }
  }

  unCheckNode(e) {
    e.preventDefault();
    if (this.props.gameStatus !== "stopped") {
      this.props.handleStatus(this.props.id, 0);
    }
  }

  render() {
    const [status, val] = [this.props.status, this.props.val];

    if (status === 2) return this.renderFlag();
    if (status === 1 && val === "X") return this.renderBomb();
    if (status === 1) return this.renderOpenedNode();

    return (
      <li>
        <div
          id={this.props.id}
          className="node"
          onClick={(e) => this.openNode(e)}
          onContextMenu={(e) => this.checkNode(e)}
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
          onContextMenu={(e) => this.unCheckNode(e)}
        >
          <FontAwesomeIcon icon={faFlag} />
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
