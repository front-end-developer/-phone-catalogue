/**
 * Created by mawebley on 08/06/2020
 * @description         Example of a component using Hooks but with prop-drilling instead of Redux,
 *                      Redux example is shown in another component.
 */
import React, {useState, useEffect} from 'react';
import Template from './product-detail-template';
import cssModule from './product-detail.module.scss';

const ProductDetailComponent = (props) => {
    const [productSold, setNumberOfProductsSold] = useState(1);

    /**
     * @description set up a fake product sales ticker
     */
    useEffect(() => {
        const minProducts = 1;
        const maxProducts = 10;
        setTimeout(() => {
            const sold = Math.floor((Math.random() + minProducts) * maxProducts);
            setNumberOfProductsSold(sold);
        }, 2000);
    }, [productSold]);

    return (
        <div className="row">
            <span className={cssModule.products_sold_ticker}>
                Latest product information: sold {productSold.toString()}, since last viewed
            </span>
            <Template {...props} />
        </div>
    )
}

export default ProductDetailComponent;