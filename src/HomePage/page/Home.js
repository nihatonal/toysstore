import React from 'react';

import Hero from '../components/Hero';

import './Home.css'
function Home(props) {
    return (
        <div className='home_container container'>
            <Hero />
        </div>
    );
}

export default Home;