import React, { useContext, useEffect, useState } from 'react'
import { Header, Input, Segment,Button } from 'semantic-ui-react'
import "../styles/admin.css"
import * as XLSX from "xlsx";
import { useExcelHandler } from "../../logic/xlsx/xlsx";
import { myContext } from '../../context/myContext';

const Admin = () => {
  const {filteredAdmData} = useContext(myContext)
  const [count,setCount] = useState()
  const [ingresos,setIngresos] = useState(0)
 
  //funcion para reenderizar por ESTADO

  const renderComponent = (value) => {

        const filteredData = filteredAdmData.filter((item) => {
        
          return item.ESTADO.startsWith(value);
        })
        return (filteredData.length)
      }

  const handleChange = (e) =>{
   setCount(e.target.value)
  }    

  const handleClick = (e) =>{
    setIngresos(count)
  }
  const textoACopiar = `
  Veris: ${renderComponent("PENDIENTE VERIFICACIÓN")}
  Audios: ${renderComponent("PENDIENTE AUDITORIA") + renderComponent("DIFERIDA AUDITORIA")}
  Transito: ${renderComponent("EN TRANSITO")}
  Cargas: ${renderComponent("DIFERIDA CARGA MOVISTAR") + renderComponent("PENDIENTE CARGA MOVISTAR")}
  Iris: ${renderComponent("PENDIENTE CARGA IRIS")}
  Ingresos ${ingresos}
  `

  const copiarTexto = async () => {
    try {
      await navigator.clipboard.writeText(textoACopiar);
      alert('Texto copiado al portapapeles');
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };

  return (
<>
 {    <Segment.Group className='segment-cont'>
    <h2 className='segmentGretting'>Buenos días!</h2>
    <Segment.Group>
      <Segment>VERIFICACIÓN: {renderComponent("PENDIENTE VERIFICACIÓN")}</Segment>
      <Segment>AUDITORÍA: {renderComponent("PENDIENTE AUDITORIA") + renderComponent("DIFERIDA AUDITORIA") }</Segment>
      <Segment>TRANSITO: {renderComponent("EN TRANSITO")}</Segment>
      <Segment>CARGAS: {renderComponent("DIFERIDA CARGA MOVISTAR") + renderComponent("PENDIENTE CARGA MOVISTAR")}</Segment>
      <Segment>IRIS: {renderComponent("PENDIENTE CARGA IRIS")}</Segment>
    </Segment.Group>
    {ingresos <= 0 ? <div><Input onChange={handleChange} icon='users' iconPosition='left' placeholder='Ingresos' /> <Button  onClick={handleClick} inverted>Sumar</Button> </div>: <Segment>INGRESOS: {ingresos} <i className='ml-3' onClick={()=>setIngresos(0)}>🔁</i> <Button color='blue' className='buttonCopy' onClick={copiarTexto}>Copiar</Button></Segment> }
     
  </Segment.Group>
   }
  </>
  )
}

export default Admin