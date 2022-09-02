import React from 'react'
import Nav from '../Nav'
import './GenreScreen.css'
import Footer from '../Footer';
import Row2 from '../Row2';
import requests from '../../Requets';


function GenreScreen({title,descrp}) {
  return (
    <div className='genreContainer'>
        <Nav className='navbar'/>
        <h2 className='genreContainer__heading'> {title} </h2>
        <h4> {descrp} </h4>
        { title === 'TV Shows' && (
          <>
            <Row2 title='Trending' fetchUrl={requests.fetchTrendingTv}/>
            <Row2 title='Action' fetchUrl={requests.fetchActionTv}/>
            <Row2 title='Comedy' fetchUrl={requests.fetchComedyTv}/>
            <Row2 title='Animation' fetchUrl={requests.fetchAnimationTv}/>
            <Row2 title='Crime' fetchUrl={requests.fetchCrimeTv}/>
            <Row2 title='Drama' fetchUrl={requests.fetchDramaTv}/>
            <Row2 title='Kids' fetchUrl={requests.fetchKidsTv}/>
            {/* <Row2 title='Sci-fci' fetchUrl={requests.fetchSciTv}/> */}
          </>
        )}

        { title === 'Movies' && (
          <>
            <Row2 title='Trending' fetchUrl={requests.fetchTrending}/>
            <Row2 title='Action' fetchUrl={requests.fetchActionMovies}/>
            <Row2 title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
            <Row2 title='Crime' fetchUrl={requests.fetchCrimeMovies}/>
            <Row2 title='Animation' fetchUrl={requests.fetchAnimationMovies}/>
            <Row2 title='Fantasy' fetchUrl={requests.fetchFantasyMovies}/>
            <Row2 title='Family' fetchUrl={requests.fetchFamilyMovies}/>
          </>
        )}
        <Footer className='footer'/>
    </div>
  )
}

export default GenreScreen