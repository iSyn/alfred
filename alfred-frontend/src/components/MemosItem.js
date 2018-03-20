import React, { Component } from 'react';

class MemosItem extends Component {
   
    handleClick = () => { this.props.deleteMemo(this.props.memo.id, this.props.index) }

    render() { 

        let date = new Date(this.props.memo.timestamp).toLocaleString();

        return <div className="memo-item" style={{ backgroundColor: "#7397e9" }}>
            <i onClick={this.handleClick} className="fa fa-times fa-1x" />
            <h1>{this.props.memo.title}</h1>
            <hr />
            <p>{this.props.memo.description}</p>
            <p>{date}</p>
          </div>;
    }
}
 
export default MemosItem;