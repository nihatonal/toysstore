import React, { useEffect, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import CartIcon from '../../assets/icons/cart.svg';

import { ShareContext } from '../../shared/context/share-contex';

import './Cart.css';

function Cart() {
    const share = useContext(ShareContext);
    return (
        <div className='cart_wrapper'>
            <NavLink style={{ fontSize: '13px' }} className="nav-item" to='/cart'>Cart</NavLink>
            <NavLink className="nav-cart-icon" to='/cart'><ReactSVG src={CartIcon} className="cart_icon" /></NavLink>
            <p className="cart_count" onClick={() => share.showModal()}>{share.shop ? share.shop.length : 0}</p>
        </div >
    );
}

export default Cart;