import React, { Component } from 'react';

import Buttons from "./Buttons";
import SearchContainer from './SearchContainer';
import Graph from './Graph';
import Details from './Details';

class Main extends Component {
    render() { 
        return ( 
            <div className='main'>
                <div className="main--left">
                    <SearchContainer 
                        allActivity={this.props.allActivity} 
                        searchingFor={this.props.searchingFor}
                        searchFor={this.props.searchFor}
                        searchResults={this.props.searchResults}
                    />
                </div>
                <div className="main--right">
                    <Buttons />
                    <Graph 
                        allOrders={this.props.allOrders}
                    />
                    <Details 
                        currentState={this.props.currentState}
                    />
                </div>
            </div>
        )
    }
}
 
export default Main;