import React, { Component } from 'react';

import Header from "./Header";
import Main from './Main';

class Dashboard extends Component {
    render() { 
        return ( 
            <div>
                <Header />
                <Main allActivity={this.props.allActivity}/>
            </div>
        )
    }
}
 
export default Dashboard;