/**
 * Created by mawebley on 09/06/2020
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
import cssModule from './style.module.scss';

const AppLinks = () => {
    const links = [
        {
            name: 'Product List',
            url: '/'
        }
    ];

    let linksList = links.map((link, index) => {
       return (
           <li key={index.toString()}>
               <NavLink className='link'
                        activeClassName={cssModule.activeNavLink}
                        to={link.url}
                        exact={index === 0 ? true : false}>
                   {link.name}
               </NavLink>
           </li>
       )
    });

    return (
        <ul>
            {linksList}
        </ul>
    );
}

export default AppLinks;