import React from 'react'
import '../../styles/main.css'
import  './styles.css'

const Nav = () => {
  return (
    <div className="nav__container">
        <div className='grid-background'></div>
        <nav className="nav">
            <div className="nav-row">
                <a href="./index.html" className="logo">
                <div className="logo-circle"></div>
                <p className='logo-text'>Lookers</p>                
                </a>
                
                
                    <button className="dark-mode-btn">
                    <div className="corner-tl"></div>
                <div className="corner-tr"></div>
                <div className="corner-bl"></div>
                <div className="corner-br"></div>
                    ISO:100
                    </button>            

                <button className='nav-menu'>
                <div className="corner-tl"></div>
                <div className="corner-tr"></div>
                <div className="corner-bl"></div>
                <div className="corner-br"></div>
                    Menu 
                    <span className='nav-menu__plus'>+</span>
                </button>
            </div>
    </nav>
    </div>
  )
}

export default Nav
