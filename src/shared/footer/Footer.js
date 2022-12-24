import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialBar from '../navigation/SocialBar'
import NavLinks from '../navigation/NavLinks'
import './Footer.css';
function Footer(props) {
    return (
        <div className='footer_container'>
            <div className="footer_wrapper">
                <div className="footer_top-content">
                    <h4 className="footer_logo">ToyStore</h4>
                    <NavLinks className="footer_nav">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-item active-nav-item" : "nav-item"
                            }
                            to="/catalog"
                        >
                            Home
                        </NavLink>
                    </NavLinks>
                    <SocialBar />
                </div>
                <div className="footer_bottom-content">
                    <p className="footer_bottom-item">Created with love by Elastic Themes</p>
                    <p className="footer_bottom-item">Powered by Webflow <span></span> Style Guide <span></span> Licensing</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;