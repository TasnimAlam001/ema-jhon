import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name,seller,price,img,rating}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};
import './Product.css'
export default Product;