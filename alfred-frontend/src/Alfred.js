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
      tasks: [
        {
          title: 'task1',
          description: 'description1',
          type: 1
        }, {
          title: 'task2',
          description: 'description',
          type: 1
        }, {
          title: 'task3',
          description: 'description',
          type: 1
        }
      ],
      memos: [
        {
          title: 'memo1',
          description: 'description',
          type: 2
        }, {
          title: 'memo2',
          description: 'description',
          type: 2
        }, {
          title: 'memo3',
          description: 'description',
          type: 2
        }, 
      ],
      orders: [],
      support: [],
      allActivity: [],
    }
  }

  async componentDidMount() {
    // await axios.get('/tasks').then((res) => {

    //   let tasks = res.data.map((task) => {
    //     let data = Object.assign({}, task)
    //     data.type = 1
    //     return data
    //   })

    //   this.setState({ tasks })
    // })

    let allActivity = this.state.tasks.concat(this.state.memos, this.state.orders, this.state.support)
    this.setState({ allActivity })

    // console.log("STATE", this.state)
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
