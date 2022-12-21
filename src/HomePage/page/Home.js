import React from 'react';

import Hero from '../components/Hero';
import Toys from '../components/Toys';
import StuffedToys from '../components/StuffedToys';
import WoodenToys from '../components/WoodenToys';

import './Home.css'
function Home(props) {
    return (
        <div className='home_container container'>
            <Hero />
            <Toys />
            <StuffedToys />
            <WoodenToys />
        </div>
    );
}

export default Home;