/**
 * Created by mawebley on 08/06/2020
 *
 * @description         Example of using a Class with react, instead of none class version with Hooks
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

class ProductListComponent extends Component {

    /**
     * @description     Set default state
     * @param state
     */
    state = {
        phones: this.props.phones,
        selected: {}
    };

    /**
     * @description     check for state changes using React 16.x syntax
     *                  because, The current lifecycle methods componentWillMount, componentWillReceiveProps,
     *                  and componentWillUpdate will be deprecated in a future ReactJS 16.x release
     * @param           nextProps
     * @param           prevState
     * @returns         {{phones: []}}
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.phones !== prevState.phones) {
            return ({
                phones: nextProps.phones
            });
        } else {
            return ({
                phones: prevState.phones
            });
        }
    }

    /**
     * @description load products via Redux
     */
    componentDidMount() {
        this.props.loadProducts();
    }

    /* TODO: no longer needed, was testing something
    componentDidMount() {
        this.setState((prevState, props) => {
            console.log('setState');
            console.log('this.props: ', this.props.phones);
            console.log('prevState: ', prevState.phones);
            console.log('props: ', props.phones);
            return ({
                phones: [
                    //...this.state.phones
                    ...prevState.phones,
                    props.phones
                ]
            })
        });
    }*/

    /**
     * TODO: testing something
     * @param data
     */
    clickProduct = (data) => {
        // this.props.productSelected(data);
    }

    /**
     *  TODO: update dumb component <ProductDetailComponent />
     */
    render() {
        // TODO: consider using destructure for [phones, loading]
        const {phones, isLoading, error} = this.props.phones;
        console.log('isLoading: ', isLoading);
        if (phones.length > 0) {
            const tmpl = phones.map((phone, index) => {
                console.log(index);
                return <Template key={phone.id.toString()} {...phone} />
            });

            // show ProductDetailComponent component on the right, populate with Redux on click

            return (
                <section className="container">
                    <div className="d-flex flex-wrap justify-content-between">
                        {tmpl}
                    </div>
                    <div className="row">
                        <div>ROW THREE (3)</div>
                        <ProductDetailComponent />
                    </div>
                </section>
            )
        } else {
            return (
                <section className="container">
                    <div className="col mt-3">
                        <h3>No products to display</h3>
                    </div>
                </section>
            )
        }
    }
}

ProductListComponent.propTypes = {
    phones: PropTypes.object, // .array,
    loadProducts: PropTypes.func.isRequired
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
        loadProducts: () => dispatch(phoneActions.loadPhonesActionCreator()),
        loadedProducts: data => dispatch(phoneActions.loadPhonesSuccessActionCreator(data))
    }
}

export default connect(
    mapComponentStateToProps,
    mapDispatchToComponentProps,
)(ProductListComponent);

// export default ProductListComponent;