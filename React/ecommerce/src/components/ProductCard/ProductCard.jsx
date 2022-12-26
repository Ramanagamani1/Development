import React from 'react'
import classes from "./ProductCard.module.css";


function ProductCard({item}) {
    return (
        <div className={classes.card}>
            <h3>{item.title}</h3> 
            <h5>Rs.{item.price}</h5>
            <button>Add to cart</button>
        </div>
    )
}

export default ProductCard;