import React from 'react';

const SearchItem = (props) => {
    return (
        <div className='search-item' style={{ borderLeft: '8px solid #b173e9' }}>
            <h3>{props.task.title}</h3>
            <p>{props.task.description}</p>
            <p>{props.task.date}</p>
        </div>
    )
}
 
export default SearchItem;