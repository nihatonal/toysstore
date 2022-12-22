import React, { useEffect, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import CartIcon from '../../assets/icons/cart.svg';

import { ShareContext } from '../../shared/context/share-contex';

import './Cart.css';

function Cart(props) {
    const share = useContext(ShareContext);
    // useEffect(() => {
    //     console.log(share.shop)
    // }, [share.shop])
    console.log(share.shop)
    return (
        <div className='cart_wrapper'>
            <NavLink style={{ fontSize: '13px' }} className="nav-item" to='./cart'>Cart</NavLink>
            <ReactSVG src={CartIcon} className="cart_icon" />
            <p className="cart_count" onClick={() => share.showModal()}>{share.shop ? share.shop.length : 0}</p>
        </div >
    );
}

export default Cart;