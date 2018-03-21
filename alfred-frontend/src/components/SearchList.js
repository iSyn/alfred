import React, { Component } from 'react';

import SearchItem from './SearchItem'

class SearchList extends Component {

    
    render() {     

        let arr = []
        this.props.searchingFor ? arr = this.props.searchResults : arr = this.props.allActivity

        return (   
            <div className='search-list'>
                <br />
                { this.props.searchingFor == '' ? <h3>Recent Activity</h3> : <h3>Searching for "{this.props.searchingFor}"</h3>}
                {
                    arr.map((activity, index) => {
                        return <SearchItem key={index} activity={activity}/>
                    })
                }
            </div>
        )
    }
}
 
export default SearchList;