import React, { Component } from 'react';

class TasksForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()

        if (e.target.title.value !== '' && e.target.description.value !== '') {
            let task = {
                title: e.target.title.value,
                description: e.target.description.value,
                timestamp: new Date()
            }
            this.props.addNewTask(task)
        }

        e.target.title.value = ''
        e.target.description.value = ''
    }

    render() { 
        return (  
            <div className='task-form'>
                <form onSubmit={this.handleSubmit}>
                    <h1>Task Title</h1>
                    <input type="text" name='title' placeholder='title'/>
                    <h3>Description</h3>
                    <input type="text" name='description' placeholder='description'/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
 
export default TasksForm;