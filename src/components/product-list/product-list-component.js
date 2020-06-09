/**
 * Created by mawebley on 08/06/2020
 */

import React, {Component, PureComponent} from 'react';
import Template from "./product-list-template";
import ProductDetailComponent from './product-detail/product-detail-component';

/*
import React from 'react';

const ProductList = () => {
    return (
        <section className="container">
            <div className="row">
                ROW ONE (1)
            </div>
            <div className="row">
                ROW ONE (2)
            </div>
        </section>
    );
}
*/

export default class ProductListComponent extends PureComponent {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /**
     *  <ProductDetailComponent />
     */
    render() {
        return (
            <section className="container">
                <Template />
                <div className="row">
                    ROW THREE (3)
                    <ProductDetailComponent />
                </div>
            </section>
        )
    }
}