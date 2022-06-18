import React from 'react'
import { NavLink } from 'react-router-dom'
import { getCategories } from './dummy/index';
import "./styles.css";

export default function Navbar() {
  const categories = getCategories();

  return (
    <div className='navbar'>
        <NavLink to="/" className="navbar-item" >Home</NavLink>
        <NavLink to="/about" className="navbar-item" >About</NavLink>
        { categories.map((category)=> {
          return <NavLink to={`items/${category.id}`} className="navbar-item">{category.name}</NavLink>
        })}
    </div>
  )
}
