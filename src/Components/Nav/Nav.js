import React, {useState} from 'react'
import Modal from '../Modal/Modal'
import './Nav.css'

const Nav = () => {

    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
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
                  onClick={showModal}
                >
                  Suscribe
                </button>
                <Modal show={show} setShow={setShow}>
                    Aquí va un formulario
                </Modal>
            </div>
        </nav>
    )
}

export default Nav
