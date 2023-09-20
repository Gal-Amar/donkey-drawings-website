import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/" className='link'>בית</Link>
      </div>
      <h1>דונקי וחברים</h1>
    </nav>
  )
}

export default Navbar