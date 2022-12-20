import React from 'react';

import MainHeader from './MainHeader';
import TopBar from './TopBar';

import './MainNavigation.css';
const MainNavigation = (props) => {
    return (
        <div className='main-navigation_container'>
            <TopBar />
            <MainHeader />
        </div >
    );
};

export default MainNavigation;