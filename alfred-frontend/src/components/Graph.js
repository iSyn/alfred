import React, { Component } from 'react';
import Chart from 'chart.js'


class Graph extends Component {

    //     type: 'line',
    // data: {
    //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    //     datasets: [{
    //     label: 'apples',
    //     data: [12, 19, 3, 17, 6, 3, 7],
    //     backgroundColor: "rgba(153,255,51,0.6)"
    //     }, {
    //     label: 'oranges',
    //     data: [2, 29, 5, 5, 2, 3, 10],
    //     backgroundColor: "rgba(255,153,0,0.6)"
    //     }]
    // }

    componentDidMount() {
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