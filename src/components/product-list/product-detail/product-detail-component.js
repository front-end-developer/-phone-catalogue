/**
 * Created by mawebley on 08/06/2020
 */
import React, {useState} from "react";
import Template from "./product-detail-template";

const ProductDetailComponent = () => {
    const [productName, setProductName] = useState("");

    return <>
        <Template />
        </>
}

export default ProductDetailComponent;