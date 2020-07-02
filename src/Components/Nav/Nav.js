import React, {useState} from 'react'
import Menu from '../Menu/Menu'
import './Nav.css'

const Nav = () => {

    const [open, setOpen] = useState(false)

    const clickToggle = () => {
        setOpen(!open)
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
                  onClick={clickToggle}
                >
                  Contact
                </button>
                <Menu open={open} />
            </div>
        </nav>
    )
}

export default Nav
