import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import CartIcon from '../../assets/icons/cart.svg'
import './Cart.css';

function Cart(props) {
    return (
        <div className='cart_wrapper'>
            <NavLink style={{ fontSize: '13px' }} className="nav-item" to='./cart'>Cart</NavLink>
            <ReactSVG src={CartIcon}  className="cart_icon"/>
            <p className="cart_count">0</p>
        </div>
    );
}

export default Cart;