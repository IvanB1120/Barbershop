import React from 'react'
import '../styles/navBar.css'
import {Link} from 'react-scroll'


const NavBar = () => {
  return (
    <nav>
        <p className='nav-logo'>Barbershop</p>
        <div className='nav-links'>
            <Link to='about' spy={true} smooth={true} duration={1000} offset={10}><p className='nav-text'>About</p></Link>
            <Link to='hero-container' spy={true} smooth={true}  duration={1000} offset={10}><p className='nav-text'>Services</p></Link>
            <Link to='team-page-container' spy={true} smooth={true}  duration={1000} offset={20}><p className='nav-text'>Our Team</p></Link>
            <Link to='contact-container' spy={true} smooth={true}  duration={1000}><p className='nav-text'>Contact</p></Link>
        </div>
    </nav>
  )
}

export default NavBar