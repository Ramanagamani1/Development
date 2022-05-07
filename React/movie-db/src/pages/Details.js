import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import MovieDetails from '../components/MovieDetails';

export default function Details({details,setMovieDetails}) {
  /*const [isLoading,setIsLoading] = useState();
  const {imdbID} = useParams();

  useEffect(()=> {
    const fetchMovieDetails = async () => {
        const res= await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=aa660442`);
        console.log(res.data)
    }
      fetchMovieDetails();
  },[imdbID])*/
  return (
    <div><MovieDetails details={details} setMovieDetails={setMovieDetails}/></div>
  )
}
