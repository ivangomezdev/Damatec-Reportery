import React, { useContext, useEffect, useState } from 'react'
import { Header, Input, Segment,Button } from 'semantic-ui-react'
import "../../styles/admin.css"
import * as XLSX from "xlsx";
import { useExcelHandler } from "../../logic/xlsx/xlsx";
import { myContext } from '../../context/myContext';
import { copyData } from '../../hooks/useCopyClipBoard';
import TableComp from '../table/TableComp';


const Admin = () => {
  const {filteredAdmData,renderData,infYDev} = useContext(myContext)
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
  Inf & Dev: ${infYDev.length}
  Ingresos ${ingresos}
  `
const copyText = () =>{
  copyData(textoACopiar)

}

  return (
<>
 {  <Segment.Group className='segment-cont'>
    <h2 className='segmentGretting'>Buenos días!</h2>
    <Segment.Group>
      <Segment>VERIFICACIÓN: {renderComponent("PENDIENTE VERIFICACIÓN")}</Segment>
      <Segment>AUDITORÍA: {renderComponent("PENDIENTE AUDITORIA") + renderComponent("DIFERIDA AUDITORIA") }</Segment>
      <Segment>TRANSITO: {renderComponent("EN TRANSITO")}</Segment>
      <Segment>CARGAS: {renderComponent("DIFERIDA CARGA MOVISTAR") + renderComponent("PENDIENTE CARGA MOVISTAR")}</Segment>
      <Segment>IRIS: {renderComponent("PENDIENTE CARGA IRIS")}</Segment>
      <Segment>INF & DEV: {infYDev.length}</Segment>
    </Segment.Group>
    {ingresos <= 0 ? <div><Input onChange={handleChange} icon='users' iconPosition='left' placeholder='Ingresos' /> <Button  onClick={handleClick} inverted>Sumar</Button> </div>: <Segment>INGRESOS: {ingresos} <i className='ml-3' onClick={()=>setIngresos(0)}>🔁</i> <Button color='blue' className='buttonCopy' onClick={copyText}>Copiar</Button></Segment> }
     
  </Segment.Group>
   }
   <TableComp></TableComp>
  </>

  )
}

export default Admin