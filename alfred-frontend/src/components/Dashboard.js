import React, { Component } from 'react';

import Header from "./Header";
import Main from './Main';

class Dashboard extends Component {

  render() {

    return (
      <div className="alfred">
        <Header allActivity={this.props.allActivity} />
        { this.props.loaded ? 
					<Main
						allActivity={this.props.allActivity}
						searchingFor={this.props.searchingFor}
						searchFor={this.props.searchFor}
						allOrders={this.props.allOrders}
						currentState={this.props.currentState}
					/> : null
        }
      </div>
    );
	}
	
}
 
export default Dashboard;