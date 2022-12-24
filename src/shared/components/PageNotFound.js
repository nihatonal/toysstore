import React from 'react';

import notfound from '../../assets/images/404.png'
import './PageNotFound.css';
function PageNotFound(props) {
    return (
        <div className='page-not-found'>
            <img src={notfound} alt='not found' />
            <h3>404 - Page not found</h3>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        </div>
    );
}

export default PageNotFound;