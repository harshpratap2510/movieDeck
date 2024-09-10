import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileHeader from './components/MobileHeader'
import axios from 'axios'
import { setBannerData, setImageURL } from './store/movieSlice'


function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))
      // console.log(response.data.results);
    }
    catch (error) {
      console.log("error", error);
    }
  }

  const fetchOnConfiguration = async () => {
    try {
      const response = await axios.get('/configuration')
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
      //console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchTrendingData();
    fetchOnConfiguration();
  }, [])


  return (
    <>
      <div className='pb-14 lg:pb-0'>
        <Header />
        <div className='min-h-[90vh]'>
          <Outlet />
        </div>
        <Footer />
        <MobileHeader />
      </div>
    </>
  )
}

export default App
