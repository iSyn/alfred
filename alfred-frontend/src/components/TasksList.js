import React, { Component } from 'react';

import TasksItem from './TasksItem';

class TasksList extends Component {
    render() { 

        let arr = this.props.allTasks.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

        return (  
            <div className='tasks-list list'>
                {
                    arr.map((task, index) => {
                        return <TasksItem key={index} task={task} index={index} deleteTask={this.props.deleteTask} />
                    })
                }
            </div>
            
        )
    }
}
 
export default TasksList;