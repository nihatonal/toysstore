import React from 'react';
import { NavLink } from "react-router-dom";

import './NavLinks.css';
function NavLinks(props) {
    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            {props.children}
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/catalog"
            >
                Catalog
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/dalivery"
            >
                Delivery
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/contacts"
            >
                Contacts
            </NavLink>
        </div>
    );
}

export default NavLinks;