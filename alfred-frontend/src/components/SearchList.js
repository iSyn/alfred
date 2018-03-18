import React, { Component } from 'react';

import SearchItem from './SearchItem'

class SearchList extends Component {
    render() { 

        let arr = this.props.allActivity

        if (this.props.searchingFor != '') {
            arr = this.props.allActivity.filter((activity) => {
                if (activity.title) {
                    return activity.title.includes(`${this.props.searchingFor}`);
                }
            })
        }

        // var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        // const result = words.filter(word => word.length > 6);

        // console.log(result);
        // // expected output: Array ["exuberant", "destruction", "present"]


        return (   
            <div className='search-list'>
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