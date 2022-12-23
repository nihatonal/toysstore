import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from "react-svg";
import Arrow from '../../assets/icons/arrow.svg';
import ToysSlider from './ToysSlider';
import './ToysCard.css'
function ToysCard(props) {
    return (
        <section className='shop_container section'>
            <div className="shop_wrapper">
                <div className="shopping_header">
                    <h3 className="shopping_title">{props.titleSection}</h3>
                    <NavLink to='/stuffedtoys' className='shopping_btn'>
                        See All Toys
                        <ReactSVG src={Arrow} className="arrow" />
                    </NavLink>
                </div>
                <ToysSlider data={props.data} onClick={props.onClick} />
            </div>
        </section>
    );
}

export default ToysCard;