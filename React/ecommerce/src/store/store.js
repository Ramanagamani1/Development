//redux
/*
  Problems with context
  1. You can't subscribe to partial data
  2. Business logic can't be separated from components

  Redux:
  1. actions => trigger a redux change
  2. reducers => reducers define how your state can be changed
  3. store => global state. where your data stores

*/

import {omit} from "lodash"
import {createStore} from 'redux';

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SHOW_CART = 'SHOW_CART'

// action creator functions
export function showCart(isCartOpen) {
    return {
        type: SHOW_CART,
        payload: isCartOpen
    }
}
export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}


//store
const store = createStore(cartReducer);


// Reducers
function cartReducer(state = {
    items:{},
    isCartOpen: false
}, action) {

    switch(action.type) {
        case SHOW_CART: 
            return {...state,isCartOpen: action.payload};

        case ADD_TO_CART: {
            const product = action.payload;
           
            if(state.items[product.id]) {
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [product.id] : {
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity+1
                        }
                    }
                }
            } else {
               return {
                  ...state,
                  items: {
                    ...state.items,
                    [product.id] : {
                        ...product,
                        quantity: 1
                    }
                  }
               }
            }
            
        }

        case REMOVE_FROM_CART:
            const product = action.payload;
            
            if(state.items[product.id].quantity > 1) {
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [product.id] : {
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity-1
                        }
                    }
                }
            } else {
               const items = {...state.items}
               delete items[product.id]
               return {
                  ...state,
                  items : omit(state.items,[product.id])
               }
            }
        default :
           return state;
    }
}

export default store;