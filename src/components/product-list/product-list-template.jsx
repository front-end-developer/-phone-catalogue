/**
 * Created by mawebley on 08/06/2020
 */
import React from 'react';
import cssModule from './product-list.module.scss';

const Template = ({id, name, manufacturer, description,
                      color, black, price, imageFileName,
                      screen, processor, ram}) => (
    <div className="p-2 border col-md-6 col-sm-12">
        <h3 className="">
            {name}
        </h3>
        <div className="row">
            <img src={imageFileName} alt={name} />
        </div>
        <div className={cssModule.description}>
            {description}
        </div>
        <div className={cssModule.price}>
            Price: {price}
        </div>
        <button type="button" className="btn btn-primary col">View Details</button>
    </div>
);
export default Template;