import React from 'react';

import Hero from '../components/Hero';
import Toys from '../components/Toys';
import Shopping from '../components/Shopping';
import Story from '../components/Story';
import WebFlow from '../components/WebFlow';
import Subscribe from '../components/Subscribe';
import News from '../components/News';

import './Home.css'
function Home(props) {
    return (
        <div className='home_container container'>
            <Hero />
            <Toys />
            <Shopping />
            <Story />
            <WebFlow />
            <Subscribe />
            <News />

        </div>
    );
}

export default Home;