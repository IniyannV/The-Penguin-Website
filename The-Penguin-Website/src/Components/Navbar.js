import React from 'react'
import home_button from '../assets/penguin-home-screen.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='box'>
    <div className='navbar'>
    <div className="title">The Penguin Website</div>;
        <Link to='/'> <img className='home-button' src={home_button} /> </Link>
        <Link className='link link-donate' to="/donate"> Donate </Link>
        <Link className='link link-about' to="/about"> About Us </Link>
        <Link className='link link-contact' to="/contact"> Contact </Link>
      </div>
      </div>
  )
}

export default Navbar
