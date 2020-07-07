import React, {useState} from 'react';
import './Form.css'

const Form = () => {

    const [send, setSend] = useState({
        name: '',
        email: ''
    })

    const handleInputChange = e => {
        setSend({
            ...send,
            [e.target.name] : e.target.value
        })
    }

    const sendData = e => {
        e.preventDefault()
        console.log(send.name + ' ' + send.email)
    }

    return (
        <form
            onSubmit={sendData}
        >
              <p>Name</p>
              <input 
                name='name'
                className='inputForm1'
                placeholder='Name'
                onChange={handleInputChange}
              />
              <p>E-mail</p>
              <input 
                name='email'
                className='inputForm2'
                placeholder='e-mail'
                onChange={handleInputChange}
              />
              <button 
                className='submitButton'
                type='submit'
              >
                Send
              </button>
        </form>
    )
}

export default Form