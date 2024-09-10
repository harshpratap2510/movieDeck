import React from "react";
import Home from "../pages/Home.jsx";
import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx";
import ExplorePage from "../pages/ExplorePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";

const router = createBrowserRouter([
    {
      path :"/",
      element : <App/> ,

      children : [
        {
          path :"",
          element: <Home/>
        },
        {
          path : ":explore",
          element : <ExplorePage/>
        },
        {
          path :":explore/:id",
          element :<DetailPage/>
        },
        {
          path :"search",
          element : <SearchPage/>
        }
      ]
    }
  ])
  
  export  {router};
  