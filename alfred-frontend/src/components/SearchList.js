import React, { Component } from 'react';

import SearchItem from './SearchItem'

class SearchList extends Component {
    render() { 

        return (   
            <div>
                <h3 style={{ textAlign: 'center', marginTop: '10px'}}>Recent Activity</h3>
                {
                    this.props.allTasks.map((task, index) => {
                        return <SearchItem key={index} task={task}/>
                    })
                }
            </div>
        )
    }
}
 
export default SearchList;