import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import MainNavigation from './Components/MainNavigation';
import AddShoes from './pages/AddShoes';

const getAllShoes = async () => {
  let allShoes;
  await axios.get("http://localhost:5000/api/shoe")
  .then(res => {
    allShoes = res.data
  });
  return allShoes;
}


const router = createBrowserRouter([
  {path: "/", element: <MainNavigation />, children: [
    {path: "/", element: <Home/>, loader: getAllShoes},
    {path: "/shoes", element: <Home/>},
    {path: "/favourites", element: <Home/>},
    {path: "/addShoes", element: <AddShoes/>}
  ]}
])
  
  const App = () => {
    return (
      <>
        <RouterProvider router={router}>

        </RouterProvider>
      </>
    )
  }
  
  export default App