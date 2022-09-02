import React from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import requests from '../../Requets';
import Rows from '../Rows';
import Footer from '../Footer';

function HomeScreen() {
  return (
    <div className='homeScreen'>
    
        <Nav />
        <Banner />
        <Rows title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
        <Rows title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Rows title='Popular Movies' fetchUrl={requests.fetchTrending} />
        <Rows title='Popular TV Shows' fetchUrl={requests.fetchTrendingTv} />
        <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        {/* <Rows title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} /> */}
        <Rows title='Documentaries TV' fetchUrl={requests.fetchDocumentaryTV} />
 
      <Footer />

    </div>
  )
}

export default HomeScreen