import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cart';
import { removeFromCart } from '../store/cart';

export default function AddRemoveButton({item}) {
  const dispatch = useDispatch();
  
  const {cartItems} = useSelector(state => ({
      cartItems: state.cartStore.items
  }))

  if(!cartItems[item.id]){
    return (
        <button className='btn btn-success'
          onClick={()=>{
              dispatch(addToCart(item))
          }}
        >Add To Cart</button>
      )
  } else {
      return (
        <div className="button-group">
            <button className="addremovebutton" onClick={()=>dispatch(removeFromCart(item))}>
                -
            </button>
            <div className="button-label">{cartItems[item.id].quantity}</div>
            <button className="addremovebutton" onClick={()=> dispatch(addToCart(item))}>
                +
            </button>
        </div>
      )
  }
  
}
