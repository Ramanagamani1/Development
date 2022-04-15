import React from 'react'
import '../styles/movie-list.css'
import { MovieCard } from './index'
import loading from '../media/loading.gif'

export default function MovieList({movieList,isLoading, nextPage, showDetails}) {
        return (
            <div className="movie-list"
               onScroll={(e)=>{
                 if(Math.ceil(e.target.offsetHeight + e.target.scrollTop)>= e.target.scrollHeight){
                       nextPage();
                 }
               }}
            >
            { isLoading ? 
               <img src={loading} alt="Loading" /> :
               ( 
                   movieList == undefined ? <h1 className="nomovie">No movies found</h1> : movieList.length==0 ? <h1 className="nomovie">Please search a movie...</h1> :
                    movieList.map((movie,index) => (
                    <MovieCard movie={movie} key={index} showDetails={showDetails}/>
                  ))    
               )
            }
                   
            </div>
        )
    
}
