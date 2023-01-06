// ACTION TYPES
const TOGGLE_CART = "cart/TOGGLE_CART"
const ADD_TO_CART = "cart/ADD_TO_CART"
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART"
const UPDATE_TOTAL = "cart/UPDATE_TOTAL"

// ACTIONS

export function getCartTotal(items) {
    console.log(items)
    let total = 0;
    Object.keys(items).forEach(itemId => {
        const item = items[itemId];
        total += item.quantity * item.price;
    });
    return total;
}

export const getTotal = (state) => {
    return {
        type: UPDATE_TOTAL,
        payload: state
    }
}

export const toggleCart = (isOpen) => {
     return {
         type: TOGGLE_CART,
         payload: isOpen
     }
}

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

// REDUCER

export default function reducer(state = {
    isOpen:false,
    items: {},
    total: 0
}, action) {
    switch(action.type) {
        case TOGGLE_CART : 
            return {
                ...state,
                isOpen : action.payload
            }
        case ADD_TO_CART : {
            const {id, ...data} = action.payload;
            let item = state.items[id];
            if(item) {
                item.quantity+=1;
            } else {
                item = {
                    id,
                    ...data,
                    quantity: 1
                }
            }
            return {
                ...state,
                items: {...state.items,
                  [id]: item
                }
            }
        }
        case REMOVE_FROM_CART: {
            const {id} = action.payload;
            let item = state.items[id];
            if(item.quantity > 1) {
                item.quantity -=1;
            } else {
                delete state.items[id];
            }
            return {
                ...state,
                items : {...state.items}
            }
        }
        case UPDATE_TOTAL: {
             return {
                ...state,
                total : getCartTotal(state.items)
             }
        }
        default:
            return state;
    }
}