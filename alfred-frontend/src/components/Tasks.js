import React, { Component } from 'react';

import Header from './Header';
import TasksForm from "./TasksForm";
import TasksList from './TasksList';

class Tasks extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main" style={{ borderColor: "#b173e9" }}>
          <TasksForm
            addNewTask={this.props.addNewTask}
          />
          <TasksList allTasks={this.props.allTasks} deleteTask={this.props.deleteTask}/>
        </div>
      </div>
    );
  }
}
 
export default Tasks;