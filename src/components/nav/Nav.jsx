import React, { useEffect, useState } from 'react'
import '../../styles/main.css'
import  './Nav.css'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const body = document.body;
    if (navOpen) {
      body.classList.add("red");
    } else {
      body.classList.remove("red");
    }
  }, [navOpen]);

  // useEffect(() => {
  //   if (navOpen) {
  //     const navItems = document.querySelectorAll(".nav-item");
  //     navItems.forEach((item, index) => {
  //       item.style.opacity = "1";
  //       item.style.transform = "translateY(0)";
  //       item.style.transitionDelay = `${index * 0.5}s`;
  //     });
  //   } else {
  //     const navItems = document.querySelectorAll(".nav-item");
  //     navItems.forEach((item) => {
  //       item.style.opacity = "0";
  //       item.style.transform = "translateY(20px)";
  //       item.style.transitionDelay = "0s";
  //     });
  //   }
  // }, [navOpen]);
  return (
    <div className="nav__container">
        <div className='grid-background'></div>
        <nav className="nav">
            <div className="nav-row">
                <a href="./index.html" className="logo">
                <div className="logo-circle"></div>
                <p className='logo-text'>Lookers</p>                
                </a>
                
                
            <BtnDarkMode/>

                <button className='nav-menu' onClick={() => setNavOpen(!navOpen)}>
                <div className="corner-tl"></div>
                <div className="corner-tr"></div>
                <div className="corner-bl"></div>
                <div className="corner-br"></div>
                    {navOpen ? 'Close' : 'Menu'}
                    <span className='nav-menu__plus'>+</span>
                </button>
            </div>
    </nav>
    <div className='nav-overlay ' style={{
      top: navOpen ? '0%' : '-100%',
      zIndex: navOpen ? '3' : '-2',
      transitionDelay: navOpen ? '0s' : '0s'
    }}>
      <ul className='nav-links '>
        <li className='nav-item' style={{
      top: navOpen ? '9%' : '-100%',
      left: navOpen ? '12.2%' : '0%',
      transitionDelay: navOpen ? '0s' : '0s'
    }}>
          <NavLink to='/'>Works</NavLink>
        </li>
        <li className='nav-item' style={{
      top: navOpen ? '9%' : '-100%',
      left: navOpen ? '31.4%' : '0%',
      transitionDelay: navOpen ? '0s' : '0s'
    }}>
          <NavLink to='/'>About</NavLink>
        </li>
        <li className='nav-item' style={{
      top: navOpen ? '9%' : '-100%',
      left: navOpen ? '50.4%' : '0%',
      transitionDelay: navOpen ? '0s' : '0s'
    }}>
          <NavLink to='/'>Services</NavLink>
        </li>
        <li className='nav-item' style={{
      top: navOpen ? '9%' : '-100%',
      left: navOpen ? '69.5%' : '0%',
      transitionDelay: navOpen ? '0s' : '0s'
    }}>
          <NavLink to='/'>Contact</NavLink>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Nav
