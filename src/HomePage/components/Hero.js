import React from 'react';
import { NavLink } from "react-router-dom";

import './Hero.css';
function Hero() {
    return (
        <div className="hero_container container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <p className="hero-subtitle">Say Hello to ToyStore!</p>
                    <h1 className="hero-title">Free Ecommerce Template for Webflow</h1>
                    <NavLink className="hero-btn" to='/catalog'>Open Catalog</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Hero;