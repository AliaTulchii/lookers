import React from 'react'
import '../../styles/main.css'
import  './Nav.css'
import { NavLink } from 'react-router-dom'
import Arrow from '../../icons/Arrow'

const Nav = ({navOpen}) => {
  

  return (
    <div className='nav-overlay ' style={{
      // top: navOpen ? '0%' : '-100%',
      zIndex: navOpen ? '3' : '-2',
      display: navOpen ? 'block' : 'none',
      transitionDelay: navOpen ? '0s' : '0s'
    }}>
      <ul className='nav__list '>
        <li className='nav__item'>
          <ul className='item__sublist'>          
            <li className='item__subitem item__subitem--uppercase'>
            <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
                <NavLink to='/works' className='nav__link nav__link--uppercase'>
                Works
                </NavLink>
            </li>
            <li className='item__subitem'>
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
            <li className='item__subitem'>
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
            <li className='item__subitem'>
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
          </ul>
        </li>

        <li className='nav__item' >
        <ul className='item__sublist'>          
            <li className='item__subitem item__subitem--uppercase'>
            <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
                <NavLink to='/about' className='nav__link nav__link--uppercase'>About</NavLink>
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
          </ul>
        </li>

        <li className='nav__item' >
        <ul className='item__sublist'>          
            <li className='item__subitem item__subitem--uppercase'>
            <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
                <NavLink to='/services' className='nav__link nav__link--uppercase'>Services</NavLink>
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
          </ul>
        </li>

        <li className='nav__item'>
        <ul className='item__sublist'>          
            <li className='item__subitem item__subitem--uppercase'>
            <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
                <NavLink to='#' className='nav__link nav__link--uppercase'>Contact</NavLink>
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
            <li className='item__subitem'> 
              <NavLink to='#' className='nav__link'>
                <p>residential properties</p>
                <Arrow />
                </NavLink> 
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Nav
