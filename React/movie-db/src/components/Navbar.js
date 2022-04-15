import React from 'react'
import '../styles/navbar.css'

export default function Navbar ({setMovie,search}) {
  return (
    <div className='navbar'>
       <span className='title'>Movie-db</span>
       <input type="text" 
           placeholder="Enter movie name" 
           className="search-bar"
           onChange={(e)=>{
                setMovie(e.target.value)
           }}
           onKeyPress={search}/>
    </div>
  )
}
