import React, { useContext, useState } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import "../../../styles/pdvTotalTable.css"
import { myContext } from '../../../context/myContext'
import SelectMenu from '../../selectMenu/SelectMenu'
import TableComp from '../../table/TableComp'

const PdvTotalTable = () => {
  const [stateData,setStateData] = useState([])
  const { filteredAdmData } = useContext(myContext)
  //manejo los dias de retraso de las solicitudes
  const dateDelay = () =>{
    const date = new Date();
    const year = date.getFullYear() 
    const month = String(date.getMonth() + 1).padStart(2,"0")
    const day = String(date.getDate() -1).padStart(2, "0")
    const dateFormat = `${year}-${month}-${day}`
    return dateFormat
  }


  const dataMap = ((seller) => {
    const data = filteredAdmData.filter((i) => {
      return i.USUARIO.startsWith(seller) && i.ESTADO.includes(stateData)
    })
    
    return data
    
  })

  //Función para filtrar por retraso en bandeja
  
  const delayOrders = ((seller)=>{
  
    const info = dataMap(seller).filter(i=>
    i.ACTUALIZADO.slice(0,10) < dateDelay())
    return info.length
    })

   
    
    const pdv = dataMap("PDV").length
    const CallDelay = delayOrders("EG") + delayOrders("FV") + delayOrders("JS") + delayOrders("DS") + delayOrders("NB")
    const call = dataMap("EG").length + dataMap("FV").length + dataMap("JS").length + dataMap("DS").length + dataMap("NB").length
    const cazaDelay = delayOrders("MB") + delayOrders("EF")
    const caza = dataMap("EF").length + dataMap("MB").length
    


 
    const handleChange = (e) =>{
      setStateData(e.target.value)
      
    }

    const props = [
      {image:"https://react.semantic-ui.com/images/avatar/small/lena.png",name:"PDV-",cantidad:pdv,atraso:delayOrders("PDV")},
      {image:"https://react.semantic-ui.com/images/avatar/small/lindsay.png",name:"CALL",cantidad:call,atraso:CallDelay},
      {image:"https://react.semantic-ui.com/images/avatar/small/matthew.png",name:"CAZADORES",cantidad:caza,atraso:cazaDelay},
      {image:"https://react.semantic-ui.com/images/avatar/small/mark.png",name:"TOTAL",cantidad:pdv + caza + call,atraso:delayOrders("PDV") + cazaDelay + CallDelay}
    ]
  

    const tHeader = [
      {tableTitle: <SelectMenu handleChange={handleChange} id={"locales"} placeholder={"filtrá por un local."} name={"locales"} defaultOp={"Pendiente"} 
    op1={"VERIFICACIÓN"}
    op2={"AUDITORIA"}
    op3={"TRANSITO"}
    op4={"CARGA"}
    ></SelectMenu>},
    {tableTitle:"Cantidad"},
    {tableTitle:"Atraso"}
    ]

  return (
    <TableComp props={props} tHeader={tHeader}></TableComp>
  )
  
}

export default PdvTotalTable