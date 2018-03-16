import React, { Component } from 'react';

class Buttons extends Component {
    render() { 
        return ( 
            <div className='buttons-container'>
                <div className="button button-tasks"> <i className='fa fa-check fa-1x'></i> &nbsp; Tasks</div>
                <div className="button button-memos"> <i className='fa fa-book fa-1x'></i> &nbsp; Memos</div>
                <div className="button button-orders"> <i className='fa fa-list fa-1x'></i> &nbsp; Orders</div>
                <div className="button button-support"> <i className='fa fa-question fa-1x'></i> &nbsp; Support</div>
            </div>
        )
    }
}
 
export default Buttons;