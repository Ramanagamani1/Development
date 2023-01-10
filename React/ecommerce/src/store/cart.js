import {omit} from "lodash"


const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SHOW_CART = 'SHOW_CART'
const CHECKOUT_INIT = 'CHECKOUT_INIT'
const CHECKOUT_DONE = 'CHECKOUT_DONE'
const CHECKOUT_ERROR = 'CHECKOUT_ERROR'


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

export function placeOrder() {
    return async (dispatch, getState) => {
           const items = getState().cart.items;
           const itemsList = Object.values(items);
           const subTotal = itemsList.reduce((total,currItem) => {
               const newTotal = total + (currItem.quantity * currItem.price);
               return newTotal;
           },0);
           const tax = subTotal * 0.18;
           const discount = 0;

           dispatch({type: CHECKOUT_INIT})

           try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json")
            const response = await fetch("http://localhost:3001/orders", {
                method: "POST",
                body : JSON.stringify({
                    products: itemsList,
                    subTotal : subTotal,
                    discount : discount,
                    tax : tax,
                    total: subTotal+tax - discount
                }),
                headers: myHeaders
            });
             if (response.ok){
                dispatch({type: CHECKOUT_DONE})
             } else {
                dispatch({type: CHECKOUT_ERROR, payload: new Error(response.statusText)})
             }
             
           }catch (error) {
              dispatch({type: CHECKOUT_ERROR, payload: error})
           }

    }
}

// Reducers
function cartReducer(state = {
    items:{},
    isCartOpen: false,
    isSubmitting : false,
    isSubmitSuccess : false,
    submitError : null
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
        
        case CHECKOUT_INIT : {
            return {...state, isSubmitting: true}
        }
        case CHECKOUT_DONE: {
            return {...state, isSubmitting: false, submitError:null,isSubmitSuccess: true}
        }
        case CHECKOUT_ERROR: {
            return {...state, isSubmitting: false, submitError: action.payload}
        }
        default :
           return state;
    }
}

export default cartReducer;