import React, { useEffect, useState } from 'react'
import './Header.css'
import Nav from '../nav/Nav'
import { NavLink, useLocation } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const location = useLocation()

  useEffect(() => {
    const body = document.body;
    if (navOpen) {
      body.classList.add("red");
    } else {
      body.classList.remove("red");
    }
  }, [navOpen]);

  useEffect(() => {
    setNavOpen(false); // Закриваємо меню
  }, [location]);

  return (
    <div className="header__container">
        
        <nav className="header">
        <div className='grid-background'></div>
            <div className="header-row">
                <NavLink to="/" className="logo">
                <div className="logo-circle"></div>
                <p className='logo-text'>Lookers</p>                
                </NavLink>
                
                
            <BtnDarkMode/>

                <button className='headerbtn' onClick={() => setNavOpen(!navOpen)}>
                <div className="corner-tl"></div>
                <div className="corner-tr"></div>
                <div className="corner-bl"></div>
                <div className="corner-br"></div>
                    {navOpen ? 'Close' : 'Menu'}
                    <span className='header__plus'>+</span>
                </button>
            </div>
    </nav>
    <Nav navOpen={navOpen} />
    </div>
  )
}

export default Header
