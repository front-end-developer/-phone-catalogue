/**
 * Created by mawebley on 09/06/2020
 */
import React from 'react';
import './top-bar-content.scss';

const TopBarContent = () => {
    return (
        <section className="fixed-navbar">
            <nav className="navbar navbar-custom">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <span className="brand"></span>
                        </a>
                    </div>
                </div>
            </nav>
        </section>
    );
}
export default TopBarContent;