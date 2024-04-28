/*import React from "react";
import './Item.css'
const Item = (props) => {
    console.log(Image);
    return (
        <div className="item">
            <img src={props.img} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {props.new_price}
                </div>
                <div className="item-price-old">
                    {props.old_price}
                </div>
            </div>
        </div>
    );
} 
export default Item;*/
import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="item">
            <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt={name} /></Link>
            <p>{name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${new_price}
                </div>
                <div className="item-price-old">
                    ${old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;
