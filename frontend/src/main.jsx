
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  
import './index.css'
import {router} from './routes/index'
import { RouterProvider } from 'react-router-dom'
import axios from 'axios';
import { store } from './store/store'
import { Provider } from 'react-redux'

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
) 

