import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/about">About</Link></li>
                <li><Link className='link' to="/services">Services</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>    
                <li><Link className='link' to="/hook">Hook</Link></li>
                <li><Link className='link' to="/login">Login</Link></li>
                <li><Link className='link' to="/signup">Signup</Link></li>
    
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
// dom
//  html
// head body
// title h1 div
// virtual dom
// html
// head body
//title h1 div
//            p //new
// Actual DOM
// html
//head body
//title h1 div
//                      p .// updated