import React from 'react'
import './Modal.css'

const Modal = ({ children, show, setShow }) => {

  const content = show && (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className="modal-body">
            <h1>{children}</h1>
        </div>
      </div>
    </div>
  )

  return content
}

export default Modal