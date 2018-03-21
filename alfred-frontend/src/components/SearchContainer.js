import React, { Component } from 'react';

import SearchForm from "./SearchForm";
import SearchList from './SearchList';

class SearchContainer extends Component {

    render() { 

        return ( 
            <div className='search-container'>
                <SearchForm searchFor={this.props.searchFor}/>
                <SearchList allActivity={this.props.allActivity} searchingFor={this.props.searchingFor} searchResults={this.props.searchResults}/>
            </div>
        )
    }
}
 
export default SearchContainer;