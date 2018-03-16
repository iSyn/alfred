import React, { Component } from 'react';

class SearchForm extends Component {
    render() { 
        return ( 
            <form action="" className='search-form'>
                <input type="text" name='search' placeholder='Search...'/> 
                <i className='fa fa-search fa-1x'></i>
            </form>
        )
    }
}
 
export default SearchForm;