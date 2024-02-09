import React from 'react'
import '../styles/about.css'
import aboutPhoto from '../images/aboutPhoto.png'
import Rotate from 'react-reveal/Rotate';

const About = () => {
  return (
    <div className='about'>
    <h2 className='about-headline'>About us</h2>
    <div className='about-container'>
        <div className='about-text'>
      <Rotate top left>
            <p className='about-p'>We believe in the transformative power of a good haircut and strive to make every visit to our barbershop an experience to remember.</p>
            </Rotate>
            <Rotate top left>
            <p className='about-p'>At Barbershop, we take pride in our craft. Established with a passion for delivering exceptional grooming services, our barbers are experts in the latest trends and classic styles.</p>
            </Rotate>
            <Rotate bottom left>
            <p className='about-p'>Our skilled barbers are dedicated to providing you with top-notch grooming services in a welcoming and relaxed atmosphere. Discover the art of barbering and experience the difference with us.</p>
            </Rotate>
        </div>
        <div className='about-image'>
            <img src={aboutPhoto} alt='aboutPhoto' className='about-photo'/>
        </div>
    </div>
    </div>
  )
}

export default About