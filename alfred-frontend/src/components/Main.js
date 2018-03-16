import React, { Component } from 'react';

import Buttons from "./Buttons";
import SearchContainer from './SearchContainer';

class Main extends Component {
    render() { 
        return ( 
            <div className='main'>
                <div className="main--left">
                    <SearchContainer allTasks={this.props.allTasks}/>
                </div>
                <div className="main--right">
                    <Buttons />
                </div>
            </div>
        )
    }
}
 
export default Main;