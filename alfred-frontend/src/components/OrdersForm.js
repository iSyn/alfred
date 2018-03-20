import React, { Component } from 'react';

class OrdersForm extends Component {
    render() { 
        return (  
            <div className='orders-form form'>
                <h1>Create New Order</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <h3>Title</h3>
                    <input type="text" name='title' placeholder='title'/>
                    <br />
                    <h3>Description</h3>
                    <textarea name="description" id="" cols="30" rows="5"></textarea>
                    <br />
                    <button>Submit <i className='fa fa-paper-plane-o fa-1x'></i></button>
                </form>
            </div>
        )
    }
}
 
export default OrdersForm;