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
      support: [],
      allActivity: [],
    }
  }

  async componentDidMount() {
    await axios.get('/tasks').then((res) => {
      let tasks = res.data.map((task) => {
        let data = Object.assign({}, task);
        data.type = 1;
        return data;
      })
      this.setState({ tasks })
    })

    await axios.get('/memos').then((res) => {
      let memos = res.data.map((memo) => {
        let data = Object.assign({}, memo);
        data.type = 2;
        return data;
      })
      this.setState({ memos })
    })

    let allActivity = this.state.tasks.concat(this.state.memos, this.state.orders, this.state.support);
    allActivity.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    this.setState({ allActivity });
  }

  render() {

    const DashboardComponent = () => ( <Dashboard allActivity={this.state.allActivity} /> );

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
