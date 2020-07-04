import React from 'react'
import './Modal.css'

const Modal = ({ children, show, setShow }) => {

  const content = show && (
    <div className="overlay">
      <div className="modal">
        <div className="modal-close">
          <button
            type="button"
            className='close-button'
            onClick={() => setShow(false)}
          >
            X
          </button>
        </div>
        <div className="modal-body">
            <h1>{children}</h1>
        </div>
      </div>
    </div>
  )

  return content
}

export default Modal