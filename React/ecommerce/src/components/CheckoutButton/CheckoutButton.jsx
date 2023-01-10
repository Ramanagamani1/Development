import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../store/cart";

function CheckoutButton() {
    const dispatch = useDispatch();
    const isSubmitting = useSelector(state => state.cart.isSubmitting)

    function handlePlaceOrder() {
        dispatch(placeOrder());
    }

    return (
        <>
            <button onClick={handlePlaceOrder}>Place Order</button>
            {isSubmitting && <div>Placing order...</div>}
       </>
    )
}

export default CheckoutButton;