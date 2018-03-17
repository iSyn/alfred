import React, { Component } from 'react';

import SearchItem from './SearchItem'

class SearchList extends Component {
    render() { 

        return (   
            <div>
                <h3 style={{ textAlign: 'center', marginTop: '10px'}}>Recent Activity</h3>
                {
                    this.props.allActivity.map((activity, index) => {
                        return <SearchItem key={index} activity={activity}/>
                    })
                }
            </div>
        )
    }
}
 
export default SearchList;