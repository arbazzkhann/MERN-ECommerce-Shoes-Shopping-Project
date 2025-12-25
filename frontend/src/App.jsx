import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import MainNavigation from './Components/MainNavigation';
import AddShoe from './pages/AddShoe';
import EditShoe from './pages/EditShoe';

const getAllShoes = async () => {
  const res = await axios.get("http://localhost:5000/api/shoe");
  return res.data.getShoes;
};


const getMyShoes = async () => {
  const _id = localStorage.getItem("_id");
  let allShoes = await getAllShoes();

  const finalShoes = allShoes.filter(item => {
    return `"${item.addedBy}"` === _id
  });

  return finalShoes
}

const router = createBrowserRouter([
  {path: "/", element: <MainNavigation />, children: [
    {path: "/", element: <Home/>, loader: getAllShoes},
    {path: "/myShoes", element: <Home/>, loader: getMyShoes},
    {path: "/favourites", element: <Home/>},
    {path: "/addShoe", element: <AddShoe/>},
    {path: "/editShoe/:id", element: <EditShoe/>}
  ]}
]);
  
  const App = () => {
    return (
      <>
        <RouterProvider router={router}>

        </RouterProvider>
      </>
    )
  }
  
  export default App