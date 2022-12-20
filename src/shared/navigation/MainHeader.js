import React from 'react';
import NavLinks from './NavLinks';
import Cart from './Cart';

import './MainHeader.css'
function MainHeader(props) {
    return (
        <div className='navbar_container'>
            <div className='navbar_wrapper'>
                <h2 className='logo'>ToyStore</h2>
                <NavLinks style={{ width:'391px'}} />
                <Cart />
            </div>
        </div >
    );
}

export default MainHeader;