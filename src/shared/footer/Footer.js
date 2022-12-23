import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialBar from '../navigation/SocialBar'
import NavLinks from '../navigation/NavLinks'
import './Footer.css';
function Footer(props) {
    return (
        <div className='footer_container'>
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

        </div>
    );
}

export default Footer;