import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  let style ={
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "30%",
    fontSize: "xxx-large"
  }
  return (
    <Link to="/movie-list"><div style={style}>Click this to search for Movies</div></Link>
  )
}
