import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddShoes = () => {
    const navigate = useNavigate();
    const [shoeData, setShoeData] = useState({});

    const onHandleChange = (e) => {
        let value = (e.target.name === "image") ? e.target.files[0] : e.target.value;
        setShoeData(pre => ({...pre, [e.target.name]: value}));
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/shoe", shoeData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "authorization": "bearer " + localStorage.getItem("token")
            }
        })
        .then(() => navigate("/"));
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
                    <input type="file" className='input' name="image" onChange={onHandleChange}></input>
                </div>
                <button type="submit">Add Shoe</button>
            </form>
        </div>
        </>
    )
}

export default AddShoes