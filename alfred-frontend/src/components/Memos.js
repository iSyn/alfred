import React, { Component } from "react";

import Header from "./Header";
import MemosForm from "./MemosForm";
import MemosList from "./MemosList";

class Memos extends Component {
  state = {
    sum: 0
  };
  updateCell = () => {
    // this.forceUpdate();

    this.setState({
      sum: (this.state.sum += 1)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="main" style={{ borderColor: "#b173e9" }}>
          <MemosForm
            addNewTask={this.props.addNewTask}
            updateCell={this.updateCell}
          />
          <MemosList allMemos={this.props.allMemos} />
        </div>
      </div>
    );
  }
}

export default Memos;
