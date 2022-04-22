import React from 'react';
import Details from '../Details/Details';

const Product = (props) => {

    let {title,price,image} = props.product;

    let {addCartCount, removeCartCount} = props;

    
    

    // let {addCart} = props;

    return (
        <div className='col-md-4 card border '>
            <div className='p-5'>
            <img className='w-50 m-auto' src={image} alt="" />
            <h2>Name: {title.slice(0, 10)}</h2>
            <h4>Price: {price}</h4>

            <div className='d-flex justify-content-around mt-3'>
            <button onClick={addCartCount} className='btn btn-success'>Cart</button>
            <button onClick={removeCartCount} className='btn btn-danger'>Delete</button>
            <Details product = {props.product}></Details>
            </div>
            </div>

            
        </div>
    );
};

export default Product;