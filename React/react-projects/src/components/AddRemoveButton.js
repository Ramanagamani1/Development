import React from "react";

function AddRemoveButton({item,cartItems, addItem, removeItem}){

    const itemInCart = cartItems[item.id];

    if(itemInCart) {
        return (
            <div className="button-group">
                <button className="button" onClick={()=> removeItem(item)}>
                    -
                </button>
                <div className="button-label">{itemInCart.quantity}</div>
                <button className="button" onClick={()=> addItem(item)}>
                    +
                </button>
            </div>
        )
    }

    return (

        <button onClick={()=> addItem(item)} className="button">
            Add to Cart
        </button>
    )

}

export default AddRemoveButton;