import React, {useState} from 'react';
import './Form.css'

const Form = () => {

    const [send, setSend] = useState({
        name: '',
        email: ''
    })
    const [error, setError] =useState(false)

    const { name, email } = send

    const handleInputChange = e => {
        setSend({
            ...send,
            [e.target.name] : e.target.value
        })
    }

    const sendData = e => {
      e.preventDefault()
      if(name.trim() === '' || email.trim() === '') {
        setError(true)
        return
      }
      setError(false)
      // Reset form
      setSend({
        name: '',
        email: ''
      })
    }

    return (
        <form
            onSubmit={sendData}
            className='formBody'
        >
              <p>Name</p>
              <input 
                name='name'
                className='inputForm1'
                placeholder='name'
                value={name}
                onChange={handleInputChange}
              />
              <p>E-mail</p>
              <input 
                name='email'
                className='inputForm2'
                placeholder='e-mail'
                value={email}
                onChange={handleInputChange}
              />
              <button 
                type='submit'
                className='submitButton'
              >
                Send
              </button>
              {error ? 
                <span
                  className='alertForm'
                >
		  All the fields are required *
                </span> 
              : null}
        </form>
    )
}

export default Form
