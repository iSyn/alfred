import React, { Component } from "react";

import Header from "./Header";
import MemosForm from "./MemosForm";
import MemosList from "./MemosList";

class Memos extends Component {

  render() {
    return (
			<div className="alfred--memos">
				<Header />
				<div className="main" style={{ borderColor: "#7297e9" }}>
					<MemosForm addNewMemo={this.props.addNewMemo} />
					<MemosList allMemos={this.props.allMemos} />
				</div>
			</div>
    )
  }
}

export default Memos;
