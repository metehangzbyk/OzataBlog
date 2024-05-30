import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.jpg' 
import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <Link to="/">
                <button className='logo'>
                    <img src={Logo} alt="" />
                </button>
            </Link>
            <div className='mainlink'>
            <h1 className='title'>Mahmut Özata</h1>
            </div>
        </div>
    </div>
  )
}