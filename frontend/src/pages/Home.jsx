import React, { useEffect } from 'react'
import BannerHome from '../components/bannerHome.jsx'
import { useSelector } from 'react-redux'
import Card from '../components/Card.jsx'
import HorizontalScroll from '../components/horizontalScrollCard.jsx'
import { useState } from 'react'
import useFetch from '../hooks/useFetch.js'

const Home = () => {

  const trendingData = useSelector(state => state.movieData.bannerData)
 
 const {data : popularData} =  useFetch('/movie/popular')
 const {data : nowPlayingData} =  useFetch('/movie/now_playing')
 const {data : topRated} =  useFetch('/movie/top_rated')
 const {data : upcomingMovie} =  useFetch('/movie/upcoming')
//  const {data : nowPlayingData} =  useFetch('/movie/popular')
 

  
  return (
    <div>
      <BannerHome/>
      <HorizontalScroll data={trendingData} heading={"Trending Show"} trending = {true}/>
      <HorizontalScroll data={nowPlayingData} heading={"Playing In Cinemas"} trending = {false}/>
      <HorizontalScroll data={popularData} heading={"Popular Movies"}/>
      <HorizontalScroll data={topRated} heading={"Top Rated Movies"}/>
      <HorizontalScroll data={upcomingMovie} heading={"Upcoming Movies"}/>
     
    </div>
  )
}

export default Home
