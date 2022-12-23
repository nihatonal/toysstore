import React, { useState } from 'react';
import { ReactSVG } from "react-svg";


import sendplane from '../../assets/icons/sendplane.svg'
import './Subscribe.css';
function Subscribe() {
    const [value, setValue] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        alert('“Thank You for Subscribing”')
    }
    return (
        <section className='subscribe-container section'>
            <div className="subscribe-wrapper">
                <div className="subscribe-content">
                    <div className="subscribe-content-desc">
                        <div className="subscribe-content-icon">
                            <ReactSVG src={sendplane} className="sendplane" />
                        </div>
                        <p className="subscribe-content-info">
                            Subscribe to our newsletter & get <span>10% discount!</span>
                        </p>
                    </div>
                    <form className="subscribe-content-input" onSubmit={submitHandler}>
                        <input onChange={(e) => setValue(e.target.value)} value={value} type="email" require="true"/>
                        <button type='submit' className="subscribe-btn">Send</button>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default Subscribe;