import React, {useState} from 'react'
import Menu from '../Menu/Menu'
import './Nav.css'

const Nav = () => {

    // Hook for the toggle menu event.
    const [showMenu, setShowMenu] = useState(false)

    let menu

    if(showMenu) {
        menu = <Menu />
    }

    const showToggle = () => {
        setShowMenu(!showMenu)
    }

    return(
        <nav className='nav'>
            <div className='nav__name'>
                <h1>Blog</h1>
            </div>
            <div className='nav__contact'>
                <button
                  type='button'
                  className='nav__toggle--button'
                  onClick={showToggle}
                >
                  Contact
                </button>
                {menu}
            </div>
        </nav>
    )
}

export default Nav
