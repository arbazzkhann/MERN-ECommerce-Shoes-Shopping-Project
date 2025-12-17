import React, { useState } from 'react';
import Model from "./Model";
import InputForm from './InputForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const checkLogin = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
        <header className='color-white'>
            <h2>Shoes</h2>
            <ul>
                <li>Home</li>
                <li>Shoes</li>
                <li>Favourites</li>
                <li onClick={checkLogin}>Login</li>
            </ul>
        </header>
        { isOpen && <Model onClose={() => setIsOpen(false)}>
                      <InputForm/>  {/*passing as a child*/}
                    </Model>           
        }
    </>
  )
}

export default Navbar