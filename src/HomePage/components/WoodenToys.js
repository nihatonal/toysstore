import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from "react-svg";
import Arrow from '../../assets/icons/arrow.svg';
import { DataWoodenToys } from '../../assets/DataWoodenToys'
import ToysSlider from '../../shared/UI/ToysSlider';

import './StuffedToys.css';

function StuffedToys(props) {

    return (
        <section className='shop_container section'>
            <div className="shop_wrapper">
                <div className="shopping_header">
                    <h3 className="shopping_title">Wooden Toys</h3>
                    <NavLink to='/' className='shopping_btn'>
                        See All Toys
                        <ReactSVG src={Arrow} className="arrow" />
                    </NavLink>
                </div>

                <ToysSlider data={DataWoodenToys} onClick={props.onClick} />

            </div>
        </section>
    );
}

export default StuffedToys;