import React, {Component} from 'react';

class TasksItem extends Component {

    handleClick = () => { this.props.deleteTask(this.props.task.id, this.props.index); }
    
    render() { 

        let date = new Date(this.props.task.timestamp).toLocaleString();
        
        return (  
            <div className='task-item' style={{backgroundColor: "#b173e9"}}>
                <i onClick={this.handleClick} className='fa fa-times fa-1x'></i>
                <h1>{this.props.task.title}</h1>
                <hr />
                <p>{this.props.task.description}</p>

                <p className='item-date'>created on: {date}</p>
            </div>
        )
    }
}
 
export default TasksItem;