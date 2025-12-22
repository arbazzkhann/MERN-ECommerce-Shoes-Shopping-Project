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

const getMyShoes = async () => {
  let email = JSON.parse(localStorage.getItem("email"));
  console.log("user from App.jsx: ", user);
  
  let allShoes = await getAllShoes();

  return allShoes.filter(item => item.createdBy === user._id);
}

const router = createBrowserRouter([
  {path: "/", element: <MainNavigation />, children: [
    {path: "/", element: <Home/>, loader: getAllShoes},
    {path: "/shoes", element: <Home/>, loader: getMyShoes},
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