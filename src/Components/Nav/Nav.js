import React from 'react'
import './Nav.css'

const Nav = () => {
    return(
        <nav className='nav'>
            <div className='nav__name'>
                <h1>Blog</h1>
            </div>
            <div className='nav__contact'>
                <button
                  type='button'
                  className='nav__contact--data'>
                  Show Menu
                </button>
            </div>
        </nav>
    )
}

export default Nav
