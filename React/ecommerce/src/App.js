import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from './components/store/store';
import store from './components/store/index';

/*
   cart

   {
      '1': {

      }
      '2': {

      }
   }
*/

function App() {
  console.log(store.getState())
  const [cart, setCart] = useState({});
  //const [showCart, setShowCart] = useState(false);

  const isCartOpen = useSelector(state=> {
    return state.cart.isCartOpen
  })

  const dispatch = useDispatch();

  function increaseQuantity(product) {
        const newCart = {
          ...cart
        }
        if(!newCart[product.id]) {
          newCart[product.id] = {
             id: product.id,
             title: product.title,
             price: product.price,
             quantity: 0
          }
        }

        newCart[product.id].quantity +=1;   
        setCart(newCart)

        
  }

  function decreaseQuantity(product) {
        const newCart = {...cart}
         if (!newCart[product.id]) return ;

         newCart[product.id].quantity -=1;

         if(newCart[product.id].quantity === 0) {
             delete newCart[product.id];
         }
         
        setCart(newCart)
      
  }


  return (
    // <CartContext.Provider value={{cart, increaseQuantity,decreaseQuantity}}>
    <>
    <div>
       <button onClick={()=> dispatch(showCart(!isCartOpen))}>{
          isCartOpen ? 'Close Cart' : 'Open Cart'
        }</button>
       <div>{ isCartOpen && <Cart /> }</div>   
    </div>
    <ProductList/>
    </>
    // </CartContext.Provider> -,
  );
}

export default App;


/*
  The import './components/ProductList' will first go to components folder and
  check if ProductList.js or ProductList.jsx is present. If it did not find that
  file then it will check for ProductList/index.js

  Component Lifecycle:
  mounting phase 
  updting phase
  unmounting phase

  By default a component renders
  1. Its internal state changes
  2. Its props change
  3. It is subscribed to a context and value of the context changes
  4. parent re-renders

  Memo function will not render the component when the parent rerendered
*/
