import React from 'react';

import { NewsImages } from '../../assets/NewsImages';
import { NavLink } from 'react-router-dom'
import './News.css';
function News() {
    return (
        <section className='news-container section'>
            <div className="news-wrapper">
                <div className="news-section-header">
                    <p className="section-suptitle">@ElasticThemes</p>
                    <h3 className="section-title webflow-title">We're on Instagram!</h3>
                </div>
                <div className="news-content-wrapper">
                    <div className="news-images">
                        {NewsImages.map((item) => (
                            <img src={item.image.default} alt={item.id} key={item.id} />
                        ))
                        }
                    </div>
                </div>
                <NavLink to='/images' className="news-btn">See More Photos</NavLink>
            </div>
        </section>
    );
}

export default News;