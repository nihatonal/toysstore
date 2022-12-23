import React from 'react';

import './WebFlow.css';
function WebFlow(props) {
    return (
        <section className="webflow_container section">
            <div className="webflow-wrapper">
                <div className="section-header">
                    <p className="section-suptitle">Made for Webflow</p>
                    <h3 className="section-title webflow-title">Simple & Colorful Ecommerce Template for Your Business</h3>
                </div>
                <div className="webflow-content-wrapper">
                    <div className="webflow-content">
                        <h3 className="section-title">Available for FREE!</h3>
                        <span className="webflow-content_line"></span>
                        <p className="webflow-content_desc">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                        <button className="webflow-content_btn">GET IT NOW!</button>
                    </div>
                    <div className="webflow-img_wrapper"></div>
                </div>
            </div>
        </section>
    );
}

export default WebFlow;