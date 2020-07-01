import React, {useState} from 'react'
import Menu from '../Menu/Menu'
import './Nav.css'

const Nav = () => {

    // Hook for the toggle menu event.
    const [showMenu, setShowMenu] = useState(false)

    return(
        <nav className='nav'>
            <div className='nav__name'>
                <h1>Blog</h1>
            </div>
            <div className='nav__contact'>
                <button
                  type='button'
                  className='nav__toggle--button'
                  showMenu={showMenu}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Contact
                </button>
            </div>
            {showMenu ? <Menu open /> : <Menu />}
        </nav>
    )
}

export default Nav
