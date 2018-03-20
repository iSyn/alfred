import React, { Component } from 'react';

import Header from './Header'
import OrdersForm from './OrdersForm'
import OrdersList from './OrdersList'

class Orders extends Component {
    render() { 
        return (  
            <div className='alfred--orders'>
                <Header />
                <div className="main" style={{ borderColor: "#4ee893" }}>
                <OrdersForm />
                <OrdersList allOrders={this.props.allOrders} deleteOrder={this.props.deleteOrder}/>
                </div>
            </div>
        )
    }
}
 
export default Orders;