/**
 * Created by mawebley on 08/06/2020
 */

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Template from './product-list-template';
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
import * as phoneActions from '../../redux/actions/load-phones-action';

class ProductListComponent extends PureComponent {

    /**
     *
     * @param state
     */
    state = {
        phones: [],
        selected: {}
    };

    componentDidMount() {
        this.props.loadProducts();
    }

    /**
     *
     * @param data
     */
    clickProduct = (data) => {
        // this.props.productSelected(data);
    }

    /**
     *  <ProductDetailComponent />
     */
    render() {
        return (
            <section className="container">
                <Template />
                <div className="row">
                    <div>ROW THREE (3)</div>
                    <ProductDetailComponent />
                </div>
            </section>
        )
    }
}

const mapComponentStateToProps = (state, ownProps) => {
    console.log('phones loaded: ', state.phones);
    return {
        phones: state.phones
    }
}

const mapDispatchToComponentProps = (dispatch) => {
    return {
        // productSelected: data => dispatch(phoneActions.xxxxxActionCreator(data))
        loadProducts: () => dispatch(phoneActions.loadPhonesActionCreator())
    }
}

export default connect(
    mapComponentStateToProps,
    mapDispatchToComponentProps,
)(ProductListComponent);

// export default ProductListComponent;