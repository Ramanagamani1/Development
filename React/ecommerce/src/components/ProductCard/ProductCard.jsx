import React from 'react'
import AddToCart from '../AddToCart/AddToCart';
import ReduxAddToCart from '../ReduxAddToCart/ReduxAddToCart';
import classes from "./ProductCard.module.css";


function ProductCard({product}) {
    return (
        <div className={classes.card}>
            <h3>{product.title}</h3> 
            <h5>Rs.{product.price}</h5>
            {/* <AddToCart 
               product= {product}/> */}
            <ReduxAddToCart product={product}/>
        </div>
    )
}

export default ProductCard;