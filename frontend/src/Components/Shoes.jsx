import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { FaHeart, FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

import { Link, useLoaderData } from 'react-router-dom';

const Shoes = () => {
    const navigate = useNavigate();
    const getAllShoes = useLoaderData();
    const [allShoes, setAllShoes] = useState();
    // let path = window.location.pathname === "/myShoes" ? true : false;

    //favourite shoes
    let favouriteShoes = JSON.parse(localStorage.getItem("fav")) ?? [];
    const [isFavouriteShoe, setIsFavouriteShoe] = useState();

    console.log(allShoes);

    useEffect(() => {
        setAllShoes(getAllShoes);
    }, [getAllShoes])

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5000/api/shoe/${id}`)

        setAllShoes(shoes => shoes.filter(shoe => shoe._id !== id));

        let filterShoe = favouriteShoes.filter(shoe => shoe._id !== id);
        localStorage.setItem("fav", JSON.stringify(filterShoe));

        navigate('./')
    }

    const favShoe = (item) => {
        let filterShoe = favouriteShoes.filter(shoe => shoe._id !== item._id)
        favouriteShoes = favouriteShoes.filter(shoe => shoe._id === item._id).length === 0 ? [...favouriteShoes, item] : filterShoe

        localStorage.setItem("fav", JSON.stringify(favouriteShoes));
        setIsFavouriteShoe(pre => !pre);
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
                                    <FaHeart onClick={() => favShoe(item)}
                                        style={{color: (favouriteShoes.some(res => res._id === item._id)) ? "red" : ""}}
                                    />
                                </div>
                                <img src={`http://localhost:5000/images/${item.image}`} alt="shoeImage" height="120px" width="100px" />
                                <div className='card-body'>
                                    <div className='title'>{item.title}</div>
                                    <div className="">{/*Short description*/}</div>
                                    <div className="mrp">MRP: <span className="strike-through">{item.mrp}</span> <span>{item.price}</span></div>
                                    <div className="flex">
                                        <Link to={`/editShoe/${item._id}`} className='editIcon'><FaRegEdit /></Link>
                                        <MdDeleteForever onClick={() => deleteItem(item._id)}/>
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