import React from 'react';

import SocialBar from './SocialBar';

import './TopBar.css';
function TopBar(props) {
    return (
        <div className='topbar_container'>
            <div className="topbar_wrapper">
                <div className="topbar_content">
                    <a
                        href="mailto:toystore@template.com"
                        className="topbar_item"
                    >Email: toystore@template.com</a>
                    <a
                        href="tel:+1 213 974-5898"
                        className="topbar_item"
                    >Call Us: +1 213 974-5898</a>
                </div>
                <SocialBar />
            </div>
        </div>
    );
}

export default TopBar;