/**
 * Created by mawebley on 09/06/2020
 */
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageNotFound from '../components/common/page-not-found/page-not-found';
import AppLinks from "./app-links";
import ProductListComponent from "../components/product-list/product-list-component";

const AppRoutes = () => (
    <Router>
        <main>
            <AppLinks />
            <Switch>
                <Route exact path='/' component={ProductListComponent} />
                <Route exact path='*' component={PageNotFound} />
            </Switch>
        </main>
    </Router>
);

export default AppRoutes;