import React, { Component } from 'react';
import Chart from 'chart.js'


class Graph extends Component {

    componentDidMount() {

        let orders = this.props.allOrders

        let ctx = document.querySelector('.graph-container').getContext('2d')
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['a','b','c','d','e','f','g','h'],
                datasets: [{
                    data: [500, 200, 170, 420, 500, 610, 460, 530, 700, 900],
                    label: "money",
                    backgroundColor: 'rgba(0, 255, 0, 0.5)'
                }]
            },
        })
    }

    render() { 

        return (  
            <canvas className='graph-container'></canvas>
        )
    }
}
 
export default Graph;