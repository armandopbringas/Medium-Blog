import React from 'react'
import Form from '../Form/Form'
import './Modal.css'

const Modal = ({ children, show, setShow }) => {

  const openModal = () => {
    setShow(false)
  }

  const content = show && (
    <div 
      className='overlay'
    >
      <div className='modal'>
        <div className='modal-close'>
          <button
            type='button'
            className='close-button'
            onClick={openModal}
          >
            X
          </button>
        </div>
        <div className='modal-body'>
            <h1>
              {children}
            </h1>
            <Form />
        </div>
      </div>
    </div>
  )

  return content
}

export default Modal