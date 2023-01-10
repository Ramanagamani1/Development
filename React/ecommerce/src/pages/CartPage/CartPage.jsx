import React from "react";
import Cart from "../../components/Cart";
import CheckoutButton from "../../components/CheckoutButton/CheckoutButton";


function CartPage() {
    return (
      <div>
         <Cart/>
         <CheckoutButton/>
      </div>
    )
}

export default CartPage;