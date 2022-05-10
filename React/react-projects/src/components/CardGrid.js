import React, {useContext} from "react";
import { pets } from "../data";
import { store } from "../App";
import AddRemoveButton from "./AddRemoveButton";

const CardGrid = () => {
    
    const [state, setState] = useContext(store);
    const { activeCategory , cartItems} = state;

    function addItem(item) {
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

    const filteredPets = pets.filter((pet) => pet.category === activeCategory);
    return (
        <div className="products">
        {
            filteredPets.map((item) => {
                return (
                    <div key={item.id} className="product-item">
                        <img alt={item.name} src={item.poster} />
                        <div className="product-details">
                            <div className="product-title">{item.name}</div>
                            <div className="product-purchase">
                                <span>₹{item.price}</span>
                                {  
                                    <AddRemoveButton
                                       item={item}
                                       cartItems={cartItems}
                                       addItem={()=> addItem(item)}
                                       removeItem={()=>removeItem(item)} />
                                }
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default CardGrid;