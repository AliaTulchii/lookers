import React, { useState } from 'react'
import '../../styles/main.css'
import  './Nav.css'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)


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
      top: navOpen ? '2%' : '-100%',
      zIndex: navOpen ? '3' : '-2',
      transitionDelay: navOpen ? '0s' : '0s'
    }}>
      <ul className='nav-links '>
        <li className='nav-item'>
          <NavLink to='/'>Works</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/'>About</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/'>Services</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/'>Contact</NavLink>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Nav
