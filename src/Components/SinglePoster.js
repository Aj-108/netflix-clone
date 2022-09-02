import React from 'react'
import { useNavigate } from 'react-router-dom';

import './SinglePoster.css' ;


function SinglePoster({name,poster,id,isLoading}) {

  const navigate = useNavigate() ;

  // if(isLoading){
  //   <ShimmerEffect shape='rectangle'/>
  // }


  return (
    <div className='poster'>
        <img 
          src={poster} 
          alt={name} 
          className='poster__image' 
        />
        <h2> {name }</h2>
    </div>

  )
}

export default SinglePoster