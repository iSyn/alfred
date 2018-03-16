import React from 'react';

const SearchItem = (props) => {

    let color = "black";

    if (props.task) {
        color = '#b173e9';
    } else if (props.memo) {
        color = `#7397e9`;
    }

    return (
        <div className='search-item' style={{ borderLeft: `8px solid ${color}` }}>
            <h3>{props.task.title}</h3>
            <p>{props.task.description}</p>
            <p>{props.task.date}</p>
        </div>
    )
}
 
export default SearchItem;