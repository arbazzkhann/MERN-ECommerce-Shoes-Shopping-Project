import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddShoes = () => {
    const navigate = useNavigate();
    const [shoeData, setShoeData] = useState({});

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        console.log("shoeData: ", shoeData);
        await axios.post("http://localhost:5000/api/shoe", shoeData)
        .then(() => navigate("/"));
    }

    const onHandleChange = (e) => {
        let value = e.target.value;
        setShoeData(pre => ({...pre, [e.target.name]: value}));
    }

    return (
        <>
        <div className='container'>
            <form className='form' onSubmit={onHandleSubmit}>
                <div className='form-control'>
                    <label>Title</label>
                    <input type="text" className='input' name="title" onChange={onHandleChange}></input>
                </div>
                <div className='form-control'>
                    <label>MRP</label>
                    <input type="text" className='input' name="mrp" onChange={onHandleChange}></input>
                </div>
                <div className='form-control'>
                    <label>Price</label>
                    <input type="text" className='input' name="price" onChange={onHandleChange}></input>
                </div>
                <div className='form-control'>
                    <label>Color</label>
                    <input type="text" className='input' name="color" onChange={onHandleChange}></input>
                </div>
                <div className='form-control'>
                    <label>Image</label>
                    <input type="file" className='input' name="file"></input>
                </div>
                <button type="submit">Add Shoe</button>
            </form>
        </div>
        </>
    )
}

export default AddShoes