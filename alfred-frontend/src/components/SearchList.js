import React, { Component } from 'react';

import SearchItem from './SearchItem'

class SearchList extends Component {
    render() { 

        let arr = this.props.allActivity.splice(0, 6);

        if (this.props.searchingFor != '') {
            arr = this.props.allActivity.filter((activity) => {
                if (activity.title) {
                    return activity.title.includes(`${this.props.searchingFor}`);
                }
            })
        }


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