import React, { Component } from 'react';

class SearchForm extends Component {

    handleFormChange = (e) => {
        let value = e.target.value
        this.props.searchFor(value)
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    render() { 
        return ( 
            <form action="" className='search-form' onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
                <input type="text" name='search' placeholder='Search...'/> 
                <i className='fa fa-search fa-1x'></i>
            </form>
        )
    }
}
 
export default SearchForm;