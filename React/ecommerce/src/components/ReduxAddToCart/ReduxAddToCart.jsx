import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart,removeFromCart } from '../../store/store';

function ReduxAddToCart({product}) {

    const quantity = useSelector(state=> {
        return state.cart.items[product.id]?.quantity || 0;
    })

    const dispatch = useDispatch();
    
    function increment() {
         dispatch(addToCart(product));
    }

    function decrement() { 
        dispatch(removeFromCart(product));
    }

    if (quantity === 0) {
        return (
            <button onClick={increment}>Add to cart</button>
        )
    } else {
        return (
            <div>
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </div>
        )
    }
    
}
export default ReduxAddToCart;