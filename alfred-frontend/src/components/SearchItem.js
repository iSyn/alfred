import React from 'react';

const SearchItem = (props) => {

    let color = "black";

    if (props.activity.type === 1) {
        color = '#b173e9';
    } else if (props.activity.type === 2) {
        color = '#7397e9';
    } else if (props.activity.type === 3) {
        color = '#4ee893';
    } else {
        color = '#e8b94e';
    }

    console.log('PROPS', props)

    return (
        <div className='search-item' style={{ borderLeft: `10px solid ${color}` }}>
            <i className='fa fa-times fa-1x'></i>
            <h3>{props.activity.title}</h3>
            <p>{props.activity.description}</p>
            <p>{props.activity.timestamp}</p>
        </div>
    )
}
 
export default SearchItem;