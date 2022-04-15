import React from 'react'
import loading from '../media/loading.gif'
import '../styles/moviedetails.css'

//{"Title":"Shiva Baby","Year":"2020","Rated":"Not Rated","Released":"02 Apr 2021","Runtime":"77 min","Genre":"Comedy, Drama","Director":"Emma Seligman","Writer":"Emma Seligman","Actors":"Rachel Sennott, Danny Deferrari, Fred Melamed","Plot":"At a Jewish funeral service with her parents, a college student runs into her sugar daddy.","Language":"English","Country":"United States, Canada","Awards":"5 wins & 20 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BM2Y5ZDg1MmMtNjJkYS00NmEzLTk0ZjAtMGUxOTIyMDVlNzM1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"7.1","imdbVotes":"12,401","imdbID":"tt11317142","Type":"movie","DVD":"02 Apr 2021","BoxOffice":"$156,552","Production":"N/A","Website":"N/A","Response":"True"}


export default function MovieDetails({details,setMovieDetails}) {
  if (details == "loading"){
    return (
       <div className='movieposter'>
           <img src={loading} alt="Loading" />
       </div>
    )
  }
  
  return (
    <div className="movieposter">

        <div className='movie-details'>
            <img src={details.Poster} alt="Image"/>
        <div className='movie-info'>
            <h4>Title: {details.Title}</h4>
            <h4>Year : {details.Year}</h4>
            <h4>Released: {details.Released}</h4>
            <h4>Runtime: {details.Runtime}</h4>
            <h4>Actors: {details.Actors}</h4>
            <h4>Country: {details.Country}</h4>
            <span className="close" onClick={
                        (e)=>{
                            setMovieDetails("null")
                        }
            }>Close</span>
        </div>
        </div>
        <div className="description">
                <h4>Genre : {details.Genre}</h4>
                <h4>Awards : {details.Awards}</h4>
                <h4>Director: {details.Director}</h4>
                <h4>Language: {details.Language}</h4>
                <h4>imdbrating : {details.imdbRating}</h4>
                <p>Plot: {details.Plot}</p>
        </div>
    </div>
  )
}
