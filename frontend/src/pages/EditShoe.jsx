import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditShoe = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [shoeData, setShoeData] = useState({});

    console.log(shoeData);

    useEffect(() => {
      const getData = async() => {
        await axios.get(`http://localhost:5000/api/shoe/${id}`)
        .then(response => {
            const res = response.data.getShoe;
            setShoeData({
              title: res.title,
              mrp: res.mrp,
              price: res.price,
              color: res.color,
              image: res.image
            });
            console.log("image: ", res.image);
        })
        .catch((err) => {
          consoe.log("error", err);
        });
      }
      getData();
    }, [id]);

    const onHandleChange = (e) => {
        let value = (e.target.name === "image") ? e.target.files[0] : e.target.value;
        setShoeData(pre => ({...pre, [e.target.name]: value}));
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/shoe/${id}`, shoeData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "authorization": "bearer " + localStorage.getItem("token")
            }
        })
        .then(() => navigate("/shoes"));
    }
    
    return (
        <>
          <div className='container'>
              <form className='form' onSubmit={onHandleSubmit}>
                  <div className='form-control'>
                      <label>Title</label>
                      <input type="text" className='input' name="title" onChange={onHandleChange} value={shoeData.title}></input>
                  </div>
                  <div className='form-control'>
                      <label>MRP</label>
                      <input type="text" className='input' name="mrp" onChange={onHandleChange} value={shoeData.mrp}></input>
                  </div>
                  <div className='form-control'>
                      <label>Price</label>
                      <input type="text" className='input' name="price" onChange={onHandleChange} value={shoeData.price}></input>
                  </div>
                  <div className='form-control'>
                      <label>Color</label>
                      <input type="text" className='input' name="color" onChange={onHandleChange} value={shoeData.color}></input>
                  </div>
                  <div className='form-control'>
                      <label>Image</label>
                      <input type="file" className='input' name="image" onChange={onHandleChange} ></input>
                  </div>
                  <button type="submit">Edit Shoe</button>
              </form>
          </div>
        </>
    )
}

export default EditShoe