import React, {Component} from 'react';

class TasksItem extends Component {

    handleClick = () => { this.props.deleteTask(this.props.task.id, this.props.index); }
    
    render() { 

        let date = new Date(this.props.task.timestamp).toLocaleString();
        
        return (  
            <div className='task-item'>
                <i onClick={this.handleClick} className='fa fa-times fa-1x'></i>
                <h3>{this.props.task.title}</h3>
                <p>{this.props.task.description}</p>
                <p>{date}</p>
            </div>
        )
    }
}
 
export default TasksItem;