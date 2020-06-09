/**
 * Created by mawebley on 08/06/2020
 */
import React from 'react';
import TopBarContent from './top-content/tob-bar-content';
import AppRoutes from '../../routes/app-routes';
const AppContainer = () => {
    return (
        <>
            <TopBarContent />
            <header className="app-header">Header</header>
            <AppRoutes />
        </>
    );
}
export default AppContainer;