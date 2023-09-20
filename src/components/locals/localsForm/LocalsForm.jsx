import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../../context/myContext'
import { Button, Form, Label } from 'semantic-ui-react';
import {localsForm} from "../../../logic/Locals/localsFormLogic"

const LocalsForm = () => {
const {locales,changeOptionsSelect,changeOptionsDate,handleSubmit,localDate,localNameValue} = localsForm()




  return (
    <>
    
      <Form onSubmit={handleSubmit}>
        <Label ribbon color='blue' htmlFor="locales" className='mt-3'>Locales:</Label>
        <select onChange={changeOptionsSelect} id="locales" placeholder='Filtrá por un local.' name="locales">
         {locales.map((i)=>{return  <option value={i.value}>{i.label}</option> })} 
        </select>
        <Label ribbon color='blue' className='mt-3' htmlFor="date">Fecha</Label>
        <input color='blue' onChange={changeOptionsDate} type="date" name='dates' />
        <Button color='blue'  className="mt-3 mb-3"type='submit'>Buscar 🧭</Button>
      </Form>

  </>
  );
}

export default LocalsForm;
