import React from 'react'

const SelectMenu = ({handleChange,id,placeholder,name,defaultOp,op1,op2,op3,op4}) => {
  return (

     <select onChange={handleChange}  id={id} placeholder={placeholder} name={name}>
            <option> {defaultOp}</option>
            <option>{op1}</option>
            <option>{op2}</option>
            <option>{op3}</option>
            <option>{op4}</option>
            </select>
  )
}

export default SelectMenu