/**
 * Created by mawebley on 09/06/2020
 */
import React from 'react';
import cssModule from './style.module.scss';

const PageNotFound = () => {
    const style404 = {
        fontSize: 72,
        fontWeight: 'bold'
    };
    return (
        <div style={{textAlign: 'center'}}>
            <h1 className={cssModule.title}>
                Page Not Found Component
            </h1>
            <div style={style404}>404</div>
            <img src={'/assets/images/404-error.jpg'} alt="error page" />
        </div>
    )
}

export default PageNotFound;