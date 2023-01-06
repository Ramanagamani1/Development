import React from "react";
import { useMemo} from "react";
import { useSelector } from "react-redux";
// import AddToCart from "../AddToCart/AddToCart";
// import CartContext from "../contexts/CartContext";
import ReduxAddToCart from "../ReduxAddToCart/ReduxAddToCart";
import classes from './Cart.module.css';

function Cart() {

    //const {cart} = useContext(CartContext);

    const cart = useSelector(state=> {
        return state.cart.items
    })

    const cartList = Object.values(cart);

    function getTotalPrice() {
        let total = 0;
        cartList.forEach((item)=>{
            total+= item.price*item.quantity;
        })

        return total;
    }

    const totalPrice = useMemo(getTotalPrice,[cartList]);

    if (cartList.length === 0) {
        return (
            <div className={classes.cart}>No items in the cart!</div>
        )
    } else {
        return (
            <div className={classes.cart}>
                <ol>
                    { cartList.map(cartItem => (
                        <li key={cartItem.id}>
                            <span>{cartItem.title}</span>
                            <span><ReduxAddToCart product={cartItem} /></span>{' '}
                            <p>Rs {cartItem.price} X {cartItem.quantity} = Rs. {cartItem.price * cartItem.quantity}</p>
                        </li>
                    ))}
                </ol>
                <div className={classes.total}><b>Cart Total:Rs.{totalPrice}</b></div>
            </div>
        )
    }
}

export default Cart;