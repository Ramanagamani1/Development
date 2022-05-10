import React, { useState, createContext } from "react";
import CardGrid from "./components/CardGrid";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import {navbar} from './data';
import "./styles.scss";

export const store= createContext([
    { activeCategory: "dogs", cartItems: {}, totalPrice:0 },
    (obj) => obj
])


function App(){
     const state = useState({
        activeCategory: "dogs", 
        cartItems: {}, 
        totalPrice:0
     })

     const [isOpen,setIsOpen] = useState(false);

     const cartHandler = () => {
           setIsOpen(true);
    }

     return (
        <store.Provider value={state}>
            <div className="app-container">
                <div className="app-header">
                    <Navbar items={navbar} />
                    <button className="button" onClick={cartHandler}>Cart</button>
                    { isOpen ? <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>: ""}
                </div>
                <CardGrid/>
            </div>
        </store.Provider>
     )
}
export default App;