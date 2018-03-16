import React, { Component } from 'react';

import Header from "./Header";
import Main from './Main';

class Dashboard extends Component {
    render() { 
        return ( 
            <div>
                <Header />
                <Main allTasks={this.props.allTasks}/>
            </div>
        )
    }
}
 
export default Dashboard;