import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Dashboard from './components/Dashboard';

class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [],
      memos: [],
      orders: [],
      support: []
    }
  }


  render() {

    const DashboardComponent = () => ( <Dashboard /> );

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
