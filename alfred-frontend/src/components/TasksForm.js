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
            <div className='task-form form'>
                <h1>Create New Task</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <h3>Title</h3>
                    <input type="text" name='title' placeholder='title'/>
                    <br />
                    <h3>Description</h3>
                    {/* <input type="text" name='description' placeholder='description'/> */}
                    <textarea name="description" id="" cols="30" rows="5"></textarea>
                    <br />
                    <button>Submit <i className='fa fa-paper-plane-o fa-1x'></i></button>
                </form>
            </div>
        )
    }
}
 
export default TasksForm;