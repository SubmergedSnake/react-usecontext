import React from 'react';

const Nav = ({name, price}) => {
    return(
        <div>
            <h3>{name}</h3>
    <p>{price}</p>
        </div>
    )
}

export default Nav;