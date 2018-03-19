import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import './App.css';

import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks'

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchingFor: '',
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

    await axios.get('/orders').then((res) => {
      let orders = res.data.map(order => {
        let data = Object.assign({}, order);
        data.type = 3;
        return data;
      });
      this.setState({ orders });
    })

    let allActivity = this.state.tasks.concat(this.state.memos, this.state.orders, this.state.support);
    allActivity.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    this.setState({ allActivity });
  }

  async addNewTask(task) {
    await axios.post("/tasks", task)

    let tasks = [...this.state.tasks]
    tasks.push(task)

    this.setState({ tasks })
  }

  deleteTask = async (task_id, task_index) => {
    await axios.delete(`/tasks/${task_id}`)

    let tasks = [...this.state.tasks]
    tasks.splice(task_index, 1)

    this.setState({ tasks })


  }

  searchFor = (searchingFor) => {
    this.setState({ searchingFor })
  }



  render() {

    const DashboardComponent = () => ( 
      <Dashboard 
        allActivity={this.state.allActivity} 
        searchingFor={this.state.searchingFor}
        searchFor={this.searchFor}
      /> 
    );

    const TasksComponent = () => (
      <Tasks 
        addNewTask={this.addNewTask.bind(this)} 
        allTasks={this.state.tasks}
        deleteTask={this.deleteTask.bind(this)}
      />
    
    );


    return (
      <Router>
        <Switch>
          <Route exact path='/' render={DashboardComponent} />
          <Route exact path='/tasks' render={TasksComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
