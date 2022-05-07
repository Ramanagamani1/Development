import React from 'react'
import '../styles/movie-card.css'
import {Link} from "react-router-dom"

export default function MovieCard({movie,showDetails}) {
  return (
   <Link to={`/movie-list/${movie.imdbID}`}>
    <div className='card' 
       onClick={(e)=>{
          showDetails(movie);
      }}>
         <img src={movie.Poster} alt={movie.Title} />
         <div className='movie-card'>
            <p>{movie.Title}</p>
            <p>Year:{movie.Year}</p>
         </div>   
    </div>
    </Link>
  )
}
