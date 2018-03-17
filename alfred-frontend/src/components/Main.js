import React, { Component } from 'react';

import Buttons from "./Buttons";
import SearchContainer from './SearchContainer';
import Graph from './Graph';

class Main extends Component {
    render() { 
        return ( 
            <div className='main'>
                <div className="main--left">
                    <SearchContainer allActivity={this.props.allActivity}/>
                </div>
                <div className="main--right">
                    <Buttons />
                    <Graph />
                </div>
            </div>
        )
    }
}
 
export default Main;