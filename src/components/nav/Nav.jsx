import React from 'react'
import '../../styles/main.css'
import  './Nav.css'
import { NavLink } from 'react-router-dom'
import { motion} from 'framer-motion';
import Arrow from '../../icons/Arrow'



const Nav = ({navOpen}) => {
  
  const overlayAnimation = {
    hidden: { opacity: 0, y: '-100%', transition: { duration: 1.8, ease: "easeInOut" } },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeInOut" } },
  };
  
  const listAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2, // невелика затримка між зникненнями
        staggerDirection: -1,  // Зникнення від останнього до першого
        duration: 1.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // затримка між появами
        staggerDirection: 1,   // Поява від першого до останнього
        duration: 1.2,
      },
    },
  };
  
  const itemAnimation = {
    hidden: { 
      y: '-100%', 
      opacity: 0, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: "easeInOut" } 
    },
  };
  
  return (
    <motion.div className="nav-overlay"
      initial="hidden"
      animate={navOpen ? "visible" : "hidden"}
      variants={overlayAnimation}>
      <motion.ul
        className="nav__list"
        initial="hidden"
        animate={navOpen ? 'visible' : 'hidden'}
        variants={listAnimation}>
        <motion.li className="nav__item" variants={itemAnimation}>
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
        </motion.li>

        <motion.li className="nav__item" variants={itemAnimation} >
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
        </motion.li>

        <motion.li className="nav__item" variants={itemAnimation}>
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
        </motion.li>

        <motion.li className="nav__item" variants={itemAnimation}>
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
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}

export default Nav
