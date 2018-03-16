import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import './App.css';

import Dashboard from './components/Dashboard';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchFor: '',
      tasks: [],
      memos: [],
      orders: [],
      support: []
    }
  }


  async componentDidMount() {
    await axios.get('/tasks').then((res) => {
      this.setState({ tasks: res.data })
    })
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
