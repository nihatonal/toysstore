import React from 'react';

import { FaPlay } from "react-icons/fa";
import './Story.css'
function Story() {

    return (
        <div className='story-container section'>
            <div className="story-wrapper">
                <div className="story_content">
                    <p className="story_suptitle">About The Shop</p>
                    <h3 className="story_title">Watch Our Story</h3>
                    <p className="story_desc">There is no magic formula to
                        write perfect ad copy. It is based on a number of factors,
                        including ad placement, demographic, even the consumer’s mood.
                    </p>
                    <button className="story_btn"><FaPlay /></button>
                </div>
            </div>

        </div>
    );
}

export default Story;