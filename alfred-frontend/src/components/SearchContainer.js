import React, { Component } from 'react';

import SearchForm from "./SearchForm";
import SearchList from './SearchList';

class SearchContainer extends Component {
    render() { 
        return ( 
            <div className='search-container'>
                <SearchForm />
                <SearchList allTasks={this.props.allTasks}/>
            </div>
        )
    }
}
 
export default SearchContainer;