import React from 'react'
import '../Menu/Menu.css'

const Menu = ({open}) => {

    let visibility = 'hide';

    if (open) {
      visibility = 'show';
    }

    return(
    <div
        id='toggleMenu'
        className={visibility}
    >
        <ul>
            <li>
                <p>Email</p>
            </li>
            <li>
                <p>Telegram</p>
            </li>
        </ul>
    </div>
    )
}

export default Menu
