import React, { Component } from 'react';

import SearchForm from "./SearchForm";
import SearchList from './SearchList'
import SearchItem from "./SearchItem";


class SearchContainer extends Component {
    render() { 
        return ( 
            <div className='search-container'>
                <SearchForm />
                <SearchList />
            </div>
        )
    }
}
 
export default SearchContainer;