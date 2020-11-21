import React from 'react';

const navStyle = {
    background: 'coral',
  };
  

const Nav = ({name, price}) => {
    return(
        <div style={navStyle}>
            <h3>Joonas</h3>
    <p>List of Movies: </p>
        </div>
    )
}

export default Nav;