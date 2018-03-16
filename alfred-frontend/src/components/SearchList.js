import React, { Component } from 'react';

import SearchItem from './SearchList';

class SearchList extends Component {
    render() { 

        return (   
            <div>
                {
                    this.props.allTasks.map((task, index) => {
                        return <p>TASK</p>
                    })
                }
            </div>
        )
    }
}
 
export default SearchList;