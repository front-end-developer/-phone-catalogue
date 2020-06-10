/**
 * Created by mawebley on 08/06/2020
 */
import React from "react";
import './product-detail.module.scss';
import cssModule from "./product-detail.module.scss";

const Template = ({id, name, manufacturer, description,
                      price, imageFileName,
                      screen, processor, ram, closeProductDetail}) => {

    /**
     * @description Close the detail view
     */
    const closeHandler = () => {
        closeProductDetail();
    }

    return (
        <div id={id.toString()} className={cssModule.product_detail}>
            <div className={`d-flex flex-column ${cssModule.content}`}>
                <div onClick={closeHandler} className="d-flex flex-row-reverse row p-2">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className={`mb-2 ${cssModule.product_name}`}>{name}</div>
                <div className="mb-2 row"><img className={cssModule.product_image} src={imageFileName} alt={name} /></div>
                <div className="mb-2">
                    <p>{description}</p>
                </div>
                <div className="mb-2">
                    <p>Manufacturer: {manufacturer}</p>
                    <p>Screen: {screen}</p>
                    <p>Processor: {processor}</p>
                    <p>Ram: {ram}</p>
                </div>
                <div className={`mb-2 ${cssModule.price}`}>
                    <p>Price: {price}</p>
                </div>
                <footer className={cssModule.fixed_footer}>
                    <button type="button" className="btn btn-primary col" onClick={closeHandler}>Add to Cart</button>
                </footer>
            </div>
        </div>
    );
}
export default Template;