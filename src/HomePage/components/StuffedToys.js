import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from "react-svg";
import Arrow from '../../assets/icons/arrow.svg';
import { DataStuffedAnimals } from '../../assets/DataStuffedAnimals'
import ToysSlider from '../../shared/UI/ToysSlider';


import { ShareContext } from '../../shared/context/share-contex';
import './StuffedToys.css';

function StuffedToys(props) {
    const share = useContext(ShareContext);

    const [cart, setCart] = useState([])
    const cartHandler = (e) => {

        const itemExists = cart.some(item => item.id === e.target.parentNode.id);

        if (itemExists) return
        setCart([...cart, { 'id': e.target.parentNode.id, 'price': e.target.dataset['myval'] }])


        share.buy([...cart, { 'id': e.target.parentNode.id, 'price': e.target.dataset['myval'] }])
    }
    return (
        <section className='shop_container section'>
            <div className="shop_wrapper">
                <div className="shopping_header">
                    <h3 className="shopping_title">Stuffed Animals</h3>
                    <NavLink to='/' className='shopping_btn'>
                        See All Toys
                        <ReactSVG src={Arrow} className="arrow" />
                    </NavLink>
                </div>
                <ToysSlider data={DataStuffedAnimals} onClick={cartHandler} />
                {cart.map((item) => (
                    <>
                        <p>{item.id}</p> <p>{item.price}</p>
                    </>
                ))}
            </div>
        </section>
    );
}

export default StuffedToys;