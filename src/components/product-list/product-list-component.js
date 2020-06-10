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
import cssModule from './product-list.module.scss'
import * as phoneActions from '../../redux/actions/load-phones-action';

/**
 * @description     set initialised state
 */
const defaults = {
    selectedProduct: {
        id: null,
        name: '',
        manufacturer: '',
        description: '',
        price: '',
        imageFileName: '',
        screen: '',
        processor: '',
        ram: ''
    }
}

class ProductListComponent extends Component {

    /**
     * @description     Set default state
     * @param state
     */
    state = {
        phones: this.props.phones,
        selectedProduct: defaults.selectedProduct
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

    /**
     * @description     opens the product detail component
     * @param           productData {object}
     */
    openProductDetail = (productData) => {
        this.setState(() => {
            return ({
                selectedProduct: productData
            })
        });
    }

    /**
     * @description     closes the product detail component
     */
    closeProductDetail = () => {
        this.setState(() => {
            return ({
                selectedProduct: defaults.selectedProduct
            })
        });
    }

    render() {
        const {phones, isLoading, error} = this.props.phones;

        if (isLoading) {
            return (
                <div className={cssModule.loader} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

        if (error !== null) {
            return (
                <div className="row">
                    Error retrieving phones.
                </div>
            )
        }

        if (phones.length > 0) {
            const tmpl = phones.map((phone, index) => {
                return <Template key={phone.id.toString()} {...phone} openProductDetail={this.openProductDetail} />
            });

            const userSelectedProduct = () => {
                if (this.state.selectedProduct.id !== null) {
                    return <ProductDetailComponent {...this.state.selectedProduct} closeProductDetail={this.closeProductDetail} />
                }
            }

            return (
                <section className="container">
                    <div className="d-flex flex-wrap justify-content-between">
                        {tmpl}
                    </div>
                    { userSelectedProduct()}
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
    phones: PropTypes.object,
    loadProducts: PropTypes.func.isRequired
}

const mapComponentStateToProps = (state) => {
    return {
        phones: state.phones
    }
}

const mapDispatchToComponentProps = (dispatch) => {
    return {
        loadProducts: () => dispatch(phoneActions.loadPhonesActionCreator())
    }
}

export default connect(
    mapComponentStateToProps,
    mapDispatchToComponentProps,
)(ProductListComponent);