import React, { useContext} from "react";
import { store } from '../App';
import AddRemoveButton from "./AddRemoveButton";

function Cart({isOpen, setIsOpen}) {

     const [state, setState] = useContext(store);
     const { cartItems} = state;

     const items = Object.keys(cartItems) 

     let totalPrice = 0;
     let cart = [];
     Object.entries(cartItems).forEach((item) => {
            totalPrice += item[1].price;
            console.log(item);
            cart.push(item[1]);
     });



     const closeHandler = () => {
            setIsOpen(false);
     }
     
     function addItem(item) {
        totalPrice += cartItems[item.id].price;
        if(cartItems[item.id]) {
            setState({
                ...state,
                cartItems: {
                    ...cartItems,
                    [item.id] : {
                        ...cartItems[item.id],
                        quantity: cartItems[item.id].quantity+1
                    }
                }
            })
        } else {
            setState({
                ...state,
                cartItems: {
                    ...cartItems,
                    [item.id]: {
                        ...item,
                        quantity:1
                    }
                }
            })
        }
        
    }
    
    function removeItem(item) {
        let quantity = cartItems[item.id].quantity>0 ? cartItems[item.id].quantity-1: 0
        totalPrice -= cartItems[item.id].price;
        if(quantity===0) {
            delete cartItems[item.id]
            setState({
                ...state,
                cartItems: {
                    ...cartItems
                }
            })
        }
        if(cartItems[item.id]) {
            setState({
                ...state,
                cartItems: {
                    ...cartItems,
                    [item.id] : {
                        ...cartItems[item.id],
                        quantity: quantity
                    }
                }
            })
        } 
    }

     function cartItemUI(itemId) {
        const item=cartItems[itemId]
        return (
            <div key={itemId} className="cart-item">
                <div className="cart-item-top">
                  <div className="cart-item-title">{item.name}</div>
                  <AddRemoveButton item={item} cartItems={cartItems} addItem={addItem} removeItem={removeItem}/>
                </div>
                <div>{item.price} x {item.quantity} = {item.price * item.quantity}</div>
            </div>
        )
     }

     function calcTotalPrice() {
        totalPrice = 0;
        cart.forEach((item) => {
          totalPrice += item.price * item.quantity;
        });
        return totalPrice;
     }

     return (
         <div className={`cart ${isOpen ? "is-open": ""}`}>
             <div className="cart-header">
                 <div className="cart-header-title">Cart</div>
                 <button className="button is-danger" onClick={closeHandler}>Close</button>
             </div>
             <div className="cart-items">
                 {items.length === 0 ? <div className="cart-empty">Your cart is empty</div>:(
                      items.map(cartItemUI)
                 )}
                
             </div>
             <div className="cart-footer">₹{calcTotalPrice()}</div>
         </div>
     )
}

export default Cart;