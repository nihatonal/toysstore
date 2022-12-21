import React from 'react';
import { NavLink } from 'react-router-dom';


import Teddy from '../../assets/images/bear.svg';
import Wood from '../../assets/images/woodentoy.svg'

import './Toys.css';
function Toys() {
    return (
        <section className="section toys_container">
            <div className="toys_wrapper">
                <div className="toys-item">
                    <img className='toys-item_img' src={Teddy} alt='teddy' />
                    <div className="toys-item_content">
                        <p className="toys-item_content-title">Stuffed Animals</p>
                        <NavLink to='/stuffed_toys' className="toys-item_content-btn">Shop Now</NavLink>
                    </div>
                </div>
                <div className="toys-item">
                    <img className='toys-item_img' src={Wood} alt='teddy' />
                    <div className="toys-item_content">
                        <p className="toys-item_content-title">Wooden Toys</p>
                        <NavLink to='/wooden_toys' className="toys-item_content-btn">Shop Now</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Toys;