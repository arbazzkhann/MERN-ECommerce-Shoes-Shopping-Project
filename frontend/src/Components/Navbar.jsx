import React, { useEffect, useState } from 'react';
import Modal from "./Modal";
import InputForm from './InputForm';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let token = localStorage.getItem("token");

  const [isLogin, setIsLogin] = useState(token ? true : false);
  let email = JSON.parse(localStorage.getItem("email"));
  
  useEffect(() => {
    setIsLogin(token ? true : false);
  }, [token])

  const checkLogin = () => {
    if(token) {
      localStorage.removeItem("token");
      localStorage.removeItem("_id");
      localStorage.removeItem("email");
      setIsOpen(true);
    }
    else {
      setIsOpen(true);
    }
  }

  return (
    <>
        <header className='color-white'>
            <NavLink to="/"><h2 className='header-heading editIcon'>Shoes</h2></NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li onClick={() => !isLogin && setIsOpen(true)}><NavLink to={ isLogin ? "/shoes" : "/" }>Shoes</NavLink></li>
                <li onClick={() => !isLogin && setIsOpen(true)}><NavLink to={ isLogin ? "/favourites" : "/" }>Favourites</NavLink></li>
                <li onClick={checkLogin}>{(isLogin) ? "Logout" : "Login"} {email ? `(${email})` : ""}</li>
            </ul>
        </header>
        { isOpen && <Modal onClose={() => setIsOpen(false)}>
                      <InputForm
                        setIsOpen={() => setIsOpen(false)}
                      />  {/*passing as a child*/}
                    </Modal>           
        }
    </>
  )
}

export default Navbar