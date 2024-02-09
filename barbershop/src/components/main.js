import React from 'react'
import '../styles/main.css'
import mainImage from '../images/mainPhoto.jpg'
import {Link} from 'react-scroll'

const Main = () => {
  return (
    <div>
        <div className='main-container'>
            <img src={mainImage} alt='mainImage' className='main-image'/>
            <h2 className='main-headline'>Welcome to Barbershop, where style meets precision</h2>
            <Link to='about' spy={true} smooth={true} duration={1000} offset={10}><button className='main-button'>Discover now</button></Link>
        </div>
    </div>
  )
}

export default Main