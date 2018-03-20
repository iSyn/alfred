import React, { Component } from 'react';

import OrdersItem from './OrdersItem'

class OrdersList extends Component {
    render() { 
        
        let arr = this.props.allOrders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        return (  
            <div className='orders-list list'>
                {
                    arr.map((order, index) => {
                        return <OrdersItem key={index} order={order} index={index} deleteOrder={this.props.deleteOrder}/>
                    })
                }
            </div>
        )
    }
}
 
export default OrdersList;