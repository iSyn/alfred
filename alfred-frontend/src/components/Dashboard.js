import React, { Component } from 'react';

import Header from "./Header";
import Main from './Main';

class Dashboard extends Component {
    render() { 
        return <div>
            <Header allActivity={this.props.allActivity}/>
            {this.props.allActivity.length > 0 && 
                <Main 
                    allActivity={this.props.allActivity} 
                    searchingFor={this.props.searchingFor} 
                    searchFor={this.props.searchFor}
                />
            }
          </div>;
    }
}
 
export default Dashboard;