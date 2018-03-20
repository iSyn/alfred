import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import './App.css';

import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks'
import Memos from './components/Memos'
import Orders from './components/Orders'

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
      loaded: false
    }
  }

  async grabData() {
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
    this.setState({ 
      allActivity,
      loaded: true
    });

    
  }

  componentDidMount() {
    this.grabData()
  }

  async addNewTask(task) {
    await axios.post("/tasks", task)

    let tasks = [...this.state.tasks]
    tasks.push(task)

    this.setState({ tasks })
  }

  async addNewMemo(memo) {
    await axios.post("/memos", memo)
    let memos = [...this.state.memos]
    memos.push(memo)
    this.setState({ memos })
  }

  async addNewOrder(order) {
    await axios.post("/orders", order)
    let orders = [...this.state.orders]
    orders.push(order)
    this.setState({ orders })
  }

  deleteTask = async (task_id, task_index) => {
    await axios.delete(`/tasks/${task_id}`)
    let tasks = [...this.state.tasks]
    tasks.splice(task_index, 1)
    this.setState({ tasks })
  }

  deleteMemo = async (memo_id, memo_index) => {
    await axios.delete(`/memos/${memo_id}`)
    let memos = [...this.state.memos]
    memos.splice(memo_index, 1)
    this.setState({ memos })
  }

  deleteOrder = async (order_id, order_index) => {
    await axios.delete(`/orders/${order_id}`)
    let orders = [...this.state.orders]
    orders.splice(order_index, 1)
    this.setState({ orders })
  }

  searchFor = (searchingFor) => { this.setState({ searchingFor }) }

  render() {

    const DashboardComponent = () => ( 
      <Dashboard 
        allActivity={this.state.allActivity} 
        searchingFor={this.state.searchingFor}
        searchFor={this.searchFor}
        allOrders={this.state.orders}
        currentState={this.state}
        loaded={this.state.loaded}
      /> 
    );

    const TasksComponent = () => (
      <Tasks 
        addNewTask={this.addNewTask.bind(this)} 
        allTasks={this.state.tasks}
        deleteTask={this.deleteTask.bind(this)}
      />
    );

    const MemosComponent = () => {
      return <Memos 
        addNewMemo={this.addNewMemo.bind(this)}
        allMemos={this.state.memos}
        deleteMemo={this.deleteMemo.bind(this)}
      />
    }

    const OrdersComponent = () => {
      return <Orders 
        addNewOrder={this.addNewOrder.bind(this)}
        allOrders={this.state.orders}
        deleteOrder={this.deleteOrder.bind(this)}
      />
    }

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={DashboardComponent} />
          <Route exact path='/tasks' render={TasksComponent} />
          <Route exact path='/memos' render={MemosComponent} />
          <Route exact path='/orders' render={OrdersComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
