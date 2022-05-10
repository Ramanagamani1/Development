import React, { useContext } from "react";
import { store } from "../App";

const Navbar = ({items}) => {
    const [state, setState] = useContext(store);
    const { activeCategory } = state;
   
    return (
        <div className="navbar">
           {
               items.map(item=> {
                   return (
                       <div key={item.id} className={`navbar-item ${activeCategory === item.name ? "is-selected" : ""} `}
                       onClick={() => setState({...state,activeCategory: item.name})}>{item.label}</div>
                   )
               })
           }
        </div>
    )
}

export default Navbar;