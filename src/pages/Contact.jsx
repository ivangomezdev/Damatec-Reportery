import React from 'react'
import "./contact.css"


const Contact = ({title,label1,label2,buttonText}) => {
  
  return (
    <div className='formContainerDiv'>
     <h4>{title}</h4>
      <form className='formContainer' action="">
     <h4>Bienvenidos</h4>
     <label htmlFor="">{label1}</label>
     <input type="email" />
     <label htmlFor="">{label2}</label>
     <input type="password" />
     <button>{buttonText}</button>
      </form>
    </div>
  )
}

export default Contact