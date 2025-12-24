import React from 'react'
import { useEffect, useState } from 'react';
import { FaHeart, FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { Link, useLoaderData } from 'react-router-dom'

const Shoes = () => {
    const getAllShoes = useLoaderData();
    const [allShoes, setAllShoes] = useState();
    let path = window.location.pathname === "/myShoe" ? true : false;
    console.log(allShoes);

    useEffect(() => {
        
    }, [getAllShoes])

    const deleteItem = async (id) => {
        await axios.delete(`https://localhost:5000/api/shoe/${id}`)
        .then(() => {
            console.log(res => console.log(res));
        })
    }

  return (
    <>
        <div className='card-container'>
            {
                getAllShoes?.map((item, key) => {
                    return (
                        <>
                            <div key={key} className='card'>
                                <div className='FaHeart'>
                                    <FaHeart />
                                </div>
                                <img src={`http://localhost:5000/images/${item.image}`} alt="shoeImage" height="120px" width="100px" />
                                <div className='card-body'>
                                    <div className='title'>{item.title}</div>
                                    <div className="">{/*Short description*/}</div>
                                    <div className="mrp">MRP: <span className="strike-through">{item.mrp}</span> <span>{item.price}</span></div>
                                    <div className="flex">
                                        <Link to={`/editShoe/${item._id}`} className='editIcon'><FaRegEdit /></Link>
                                        <MdDeleteForever onClick={deleteItem}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })  
            }
        </div>
    </>
  )
}   

export default Shoes