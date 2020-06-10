/**
 * Created by mawebley on 08/06/2020
 * @description         Example of a component using Hooks but with prop-drilling instead of Redux,
 *                      Redux example is shown in another component.
 */
import React /*, {useState} */ from "react";
import Template from "./product-detail-template";


const ProductDetailComponent = (props) => {
    console.log('ProductDetailComponent: ', props);

    // TODO finish hooks (should be used in a list compoennt not a dumb component)
    // const [productName, setProductName] = useState("");

    return <Template {...props} />
}

export default ProductDetailComponent;