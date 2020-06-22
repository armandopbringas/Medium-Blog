import React from 'react'
import './Nav.css'

const Nav = () => {
    return(
        <nav className='nav'>
            <div className='nav__name'>
                <h1>Blog</h1>
            </div>
            <div className='nav__contact'>
                <p className='nav__contact--data'>
                  Contact
                </p>
            </div>
        </nav>
    )
}

export default Nav
