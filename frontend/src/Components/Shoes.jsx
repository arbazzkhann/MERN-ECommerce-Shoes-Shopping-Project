import React from 'react'
import { FaHeart } from "react-icons/fa";

import { useLoaderData } from 'react-router-dom'

const Shoes = () => {
    const getAllShoes = useLoaderData();

  return (
    <>
        <div className='card-container'>
            {
                getAllShoes?.getShoes?.map((item, key) => {
                    return (
                        <div key={key} className='card'>
                            <img src={`http://localhost:5000/images/${item.image}`} alt="shoeImage" height="120px" width="100px" />
                            <div className='card-body'>
                                <div className='title'>{item.title}</div>
                                <div className="">{/*Short description*/}</div>
                                <div className="mrp">MRP: <span className="strike-through">{item.mrp}</span> <span>{item.price}</span></div>
                                <FaHeart />
                            </div>
                        </div>
                    );
                })  
            }
        </div>
    </>
  )
}   

export default Shoes