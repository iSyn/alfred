import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Buttons extends Component {

    handleClick = () => {
        
    }


    render() { 
        return ( 
            <div className='buttons-container'>
                <a className='button button-tasks' href="/tasks">
                    <i className='fa fa-check fa-1x'></i> &nbsp; Tasks
                </a>
                <a className='button button-memos' href="/memos">
                    <i className='fa fa-book fa-1x'></i> &nbsp; Memos
                </a>
                <a className='button button-orders' href="/tasks">
                    <i className='fa fa-list fa-1x'></i> &nbsp; Orders
                </a>
                <a className='button button-support' href="/tasks">
                    <i className='fa fa-questions fa-1x'></i> &nbsp; Support
                </a>
            </div>
        )
    }
}
 
export default Buttons;