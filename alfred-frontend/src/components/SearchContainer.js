import React, { Component } from 'react';

import SearchForm from "./SearchForm";
import SearchList from './SearchList';

class SearchContainer extends Component {

    render() { 

        console.log("ASASDA", this.props);

        return ( 
            <div className='search-container'>
                <SearchForm />
                <SearchList allActivity={this.props.allActivity}/>
            </div>
        )
    }
}
 
export default SearchContainer;