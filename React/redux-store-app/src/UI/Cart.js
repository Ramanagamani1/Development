import React from 'react'
import { useSelector } from 'react-redux';
import { toggleCart } from '../store/cart';
import { useDispatch } from 'react-redux';
import AddRemoveButton from './AddRemoveButton';

export default function Cart() {

  const {isOpen,items} = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const cartItemIds = Object.keys(items);
  console.log(cartItemIds)
  const bodyUI = () => {
    if(cartItemIds.length<=0){
        return <h2>Your cart is empty</h2>
    }
    else {
        return (
            <div className='cart-items'>
                {
                    cartItemIds.map((id)=>{
                    return (
                      <div className='cart-item'>
                            <div className="cart-item-top">
                            <div className="cart-item-title">{items[id].name}</div>
                            <AddRemoveButton item={items[id]}/>
                            </div>
                            <div>{items[id].price} x {items[id].quantity} = {items[id].price * items[id].quantity}</div>
                            <hr/>
                      </div>
                    )})
                }
            </div>
        )
    }
    
 }

  return (
    <div className='cart' style={{display: isOpen ? 'block' : 'none'}}>
        <div className='cart-header'>
        <div className="cart-header-title">Cart</div>
          <button className="button btn btn-danger" onClick={()=> {
               dispatch(toggleCart(!isOpen))
          }}>Close</button>
       </div>
       {bodyUI()}
    </div>
  )
}
