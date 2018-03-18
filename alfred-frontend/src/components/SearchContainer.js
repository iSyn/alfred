import React, { Component } from 'react';

import SearchForm from "./SearchForm";
import SearchList from './SearchList';

class SearchContainer extends Component {

    render() { 

        console.log("ASASDA", this.props);

        return ( 
            <div className='search-container'>
                <SearchForm searchFor={this.props.searchFor}/>
                <SearchList allActivity={this.props.allActivity} searchingFor={this.props.searchingFor}/>
            </div>
        )
    }
}
 
export default SearchContainer;