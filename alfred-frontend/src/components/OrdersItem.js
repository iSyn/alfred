import React, { Component } from 'react';

class OrdersItem extends Component {

    handleClick = () => { this.props.deleteOrder(this.props.order.id, this.props.index); }

    render() { 

        let date = new Date(this.props.order.timestamp).toLocaleString();

        return (  
            <div className='order-item' style={{backgroundColor: "#76e993"}}>
                <i onClick={this.handleClick} className='fa fa-times fa-1x'></i>
                <h1>{this.props.order.item_name}</h1>
                <hr />
                <p>{this.props.order.item_price}</p>
                <p className='item-date'>created on: {date}</p>
            </div>
        )
    }
}
 
export default OrdersItem;