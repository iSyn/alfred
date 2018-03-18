import React from 'react';

const Header = (props) => {
    return (
        <header className='header'>
            {props.allActivity.length > 0 ? <h1 style={{fontSize: "2em"}}>Alfred.</h1> : 
            // else
            <h1 style={{
                fontSize: "450px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                }}>Alfred.</h1>}
        </header>
    )
}
 
export default Header;