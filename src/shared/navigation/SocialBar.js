import React from 'react';
import { NavLink } from 'react-router-dom'


import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import './SocialBar.css';
function SocialBar(props) {
    return (
        <div className='social_bar_wrapper'>
            <NavLink className="social_item" to='/#'><FaTwitter /></NavLink>
            <NavLink className="social_item" to='/#'><FaFacebookSquare /></NavLink>
            <NavLink className="social_item" to='/#'><FaInstagram /></NavLink>
            <NavLink className="social_item" to='/#'><FaPinterest /></NavLink>
            <NavLink className="social_item" to='/#'><FaYoutube /></NavLink>


        </div>
    );
}

export default SocialBar;