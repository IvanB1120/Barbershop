import React from 'react'
import '../styles/hero.css'
import hair from '../images/hair.jpg'
import beard from '../images/beard.jpg'
import kid from '../images/kid.jpg'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-scroll'


const Hero = () => {
    return (
        <div id='hero-container'>
            <h2 className='hero-headline'>Services</h2>
            <Fade left>
            <div className='services-container'>
                <div className='services-left'>
                    <img src={hair} alt='hair' className='hero-image' />
                </div>
                <div className='services-right'>
                    <h2 className='services-headline'>Men’s hair styling</h2>
                    <p className='services-text'>Our skilled barbers are trained in the latest trends and classic techniques to ensure you leave with a hairstyle that perfectly suits your personality and lifestyle. </p>
                    <Link to='contact-container' spy={true} smooth={true} duration={1000} offset={10}><button className='services-button'>Book now</button></Link>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='services-container'>
                <div className='services-left'>
                    <img src={beard} alt='beard' className='hero-image' />
                </div>
                <div className='services-right'>
                    <h2 className='services-headline'>Beard styling</h2>
                    <p className='services-text'>Our experienced barbers will sculpt and shape your beard with precision, whether you prefer a sharp, clean look or a rugged, natural feel. Indulge in the art of beard grooming and walk out with a look that exudes confidence and charisma.</p>
                    <Link to='contact-container' spy={true} smooth={true} duration={1000} offset={10}><button className='services-button'>Book now</button></Link>
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className='services-container'>
                <div className='services-left'>
                    <img src={kid} alt='kid' className='hero-image' />
                </div>
                <div className='services-right'>
                    <h2 className='services-headline'>Kid’s haircut</h2>
                    <p className='services-text'>Our patient and friendly barbers specialize in children's hairstyles, making every haircut an enjoyable adventure. From classic cuts to trendy styles, we cater to the unique preferences of our youngest clients.</p>
                    <Link to='contact-container' spy={true} smooth={true} duration={1000} offset={10}><button className='services-button'>Book now</button></Link>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Hero