import React, { useEffect, useState } from 'react'
import './Rows.css' ;
import axios from '../axios';


function Rows({title,fetchUrl,isLargeRow}) {
    const[movies,setMovies] = useState([]);

    const[isLoading,setIsLoading] = useState(true) ;

    const base_url = "https://image.tmdb.org/t/p/original" ;

    useEffect(()=>{
       setIsLoading(true) ;
       async function fetchData() {
        const request =await axios.get(fetchUrl) ;
        setMovies(request.data.results) ;
        setIsLoading(false)
        return request ;
       }
  
       fetchData() ;
    },[fetchUrl])
    


  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row__posters">
            {isLoading ?
                      ( <span>loading ... </span> )  
                      :(
                        <>
            {movies.map((movie) => (
                
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))
                  && (
                  <img 
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  key={movie.id}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                  alt={movie.name || movie.title}
                  // style = {style}
                  // onLoad = {() => setLoad(true)}
                  />)
                  
            ))}
            </>
            )}
        </div>
    </div>
  )
}

export default Rows

// TODO add movie name when hover 