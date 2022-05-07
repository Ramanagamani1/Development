import React from 'react'
import MovieList from '../components/MovieList';

export default function Movie({movieList,isLoading,nextPage,showDetails}) {
  return (
    <div>
      <MovieList movieList={movieList} isLoading={isLoading} nextPage={nextPage} showDetails={showDetails}/>
    </div>
  )
}
