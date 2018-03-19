import React from 'react';

const SearchItem = (props) => {

    let color = "black";

    if (props.activity.type === 1) {
        color = "177, 115, 233";
    } else if (props.activity.type === 2) {
        color = "115, 151, 233";
    } else if (props.activity.type === 3) {
        color = "78, 232, 147";
    } else {
        color = "232, 185, 78";
    }


    let date = new Date(props.activity.timestamp).toLocaleString()

    return (
        <div className='search-item' style={{ borderLeft: `15px solid rgb(${color})`, backgroundColor: `rgba(${color}, .1)` }}>
            <h2>{props.activity.title}</h2>
            {props.activity.type == 3 ? <h3>New Order</h3> : null}
            <hr />
            <p>{props.activity.description}</p>
            <p>{date}</p>
        </div>
    )
}
 
export default SearchItem;