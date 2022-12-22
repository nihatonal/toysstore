import React from 'react';

import Hero from '../components/Hero';
import Toys from '../components/Toys';
import Shopping from '../components/Shopping';

import './Home.css'
function Home(props) {
    return (
        <div className='home_container container'>
            <Hero />
            <Toys />
            <Shopping />

        </div>
    );
}

export default Home;