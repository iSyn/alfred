import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Dashboard from './components/Dashboard';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchFor: '',
      tasks: [
        {
          title: 'Finish Project',
          description: 'SECA PROJECT NUMBER 2',
          date: '11/11/1996'
        }, {
          title: 'Christines Birthday',
          description: 'Buy her something nice',
          date: '3/28/2018'
        }
      ],
      memos: [],
      orders: [],
      support: []
    }
  }


  render() {

    const DashboardComponent = () => ( <Dashboard allTasks={this.state.tasks} /> );

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={DashboardComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
