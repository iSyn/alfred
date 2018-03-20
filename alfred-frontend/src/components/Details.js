import React, { Component } from 'react';

class Details extends Component {
    render() { 

        let state = this.props.currentState

        return (  
            <div className='details'>
                <div>
                    <i className='fa fa-check fa-1x'></i>
                    <p> &nbsp; Total Tasks </p>
                    <p>{state.tasks.length}</p>
                </div>
                <div>
                    <i className="fa fa-book fa-1x"></i>
                    <p> &nbsp; Total Memos </p>
                    <p>{state.memos.length}</p>
                </div>
                <div>
                    <i className='fa fa-list fa-1x'></i>
                    <p> &nbsp; Total Orders </p>
                    <p>{state.orders.length}</p>
                </div>
                <div>
                    <i className='fa fa-question fa-1x'></i>
                    <p> &nbsp; Unresolved Support Tickets </p>
                    <p>{state.support.length}</p>
                </div>
                <div>
                    <i className='fa fa-server fa-1x'></i>
                    <p> &nbsp; Server Uptime </p>
                    <p>10:43:35</p>
                </div>
            </div>
        )
    }
}
 
export default Details;