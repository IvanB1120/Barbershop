import React, { useEffect, useState } from 'react'
import '../styles/menu.css'
import {Link} from 'react-scroll'

const Menu = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowMenu(scrollY >= 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div>
        {showMenu &&(
        <div className="outer-menu">
        <input
          className="checkbox-toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
  <div className="hamburger">
    <div></div>
  </div>
  <div className="menu">
    <div>
      <div>
        <ul>
          <li><Link to='about' spy={true} smooth={true} duration={1000} offset={10} onClick={handleToggle}><p className='nav-text'>About</p></Link></li>
          <li><Link to='hero-container' spy={true} smooth={true}  duration={1000} offset={10} onClick={handleToggle}><p className='nav-text'>Services</p></Link></li>
          <li><Link to='team-page-container' spy={true} smooth={true}  duration={1000} offset={20} onClick={handleToggle}><p className='nav-text'>Our Team</p></Link></li>
          <li><Link to='contact-container' spy={true} smooth={true}  duration={1000} onClick={handleToggle}><p className='nav-text'>Contact</p></Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>
)}
    </div>
  )
}

export default Menu