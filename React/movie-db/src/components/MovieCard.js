import React from 'react'
import '../styles/movie-card.css'

export default function MovieCard({movie,showDetails}) {
  return (
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
  )
}
