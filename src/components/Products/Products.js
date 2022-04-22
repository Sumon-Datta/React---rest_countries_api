import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"

const Products = (props) => {

    let {addCartCount, removeCartCount} = props;

    let [products, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    },[])

    return (
        <div>
            
            <h3 className='text-success mt-5 pt-3'>All Products</h3>

            <div className="row m-2 my-5">
            {
                products.map(product => <Product 
                    removeCartCount = {removeCartCount}
                    addCartCount ={addCartCount}
                    product = {product}
                
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;