import React, { useState } from 'react'
import {Navbar} from './index'
import MovieList from './MovieList';
import About from '../pages/About';
import Home from '../pages/Home';
import axios from 'axios';
import '../styles/container.css'
import MovieDetails from './MovieDetails';
import Movie from '../pages/Movie';
import Details from '../pages/Details';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

const API_BASE_URL = "https://www.omdbapi.com"
//&apikey=aa660442

export default function Container() {
  
  const [isLoading,setIsLoading]=useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [page,setPage] = useState(0);
  const [movieDetails, setMovieDetails] = useState("null")

  const search= async (e)=>{
     if(e.code === "Enter"){
         setPage(0);
         setIsLoading(true);
         const response = await axios.get(API_BASE_URL + "/?s=" + movie + "&apikey=aa660442");
         setMovies(response.data.Search)
         setIsLoading(false)
     }
  }

  const nextPage=async (e) => {
        setPage(page+1);
        const response = await axios.get(API_BASE_URL + "/?s=" + movie + "&apikey=aa660442"+ "&page=" + page);
        if(response.data.Search) {
             let list = movies.concat(response.data.Search)
             setMovies(list);
        }
  }

  const showDetails= async(movie) => {
      setMovieDetails("loading")
      const response = await axios.get(API_BASE_URL + "/?i=" + movie.imdbID + "&apikey=aa660442")
      setMovieDetails(response.data)
      setIsLoading(false) 
  }

  return (
    <div className='container'>
        <Navbar setMovie={setMovie} search={search}/>
        <Router>
           <Routes>
              <Route path="/movie-list" element={<Movie movieList={movies} isLoading={isLoading} nextPage={nextPage} showDetails={showDetails}/>}></Route>            
              <Route path="/movie-list/:imdbID" element={movieDetails!="null" ? <Details details={movieDetails} setMovieDetails={setMovieDetails}/>:""}></Route>
              <Route path="/about" element={<About/>}/>
              <Route path="/" element={<Home/>}/>
           </Routes>
        </Router>
        {/* {<MovieList movieList={movies} isLoading={isLoading} nextPage={nextPage} showDetails={showDetails}/>}
        { movieDetails!="null" ? <MovieDetails details={movieDetails} setMovieDetails={setMovieDetails}/>: ""} */}
    </div>
  )
}
