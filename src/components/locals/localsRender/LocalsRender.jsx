import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { myContext } from '../../../context/myContext'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import "../../../styles/navBar.css"
import { useEffect } from 'react'
import {copyData} from "../../../hooks/useCopyClipBoard"
import TableComp from '../../table/TableComp'

const LocalsRender = () => {
  const { renderData, localOptions } = useContext(myContext)
   const [myData,setMyData] = useState()
 //Filtra por el valor de cada producto y muestra la cantidad total del mismo
   const renderComponent = (value) => {
    const filteredData = renderData.filter((item) => {
      return item.PRODUCTO.startsWith(value);
    });
    return filteredData.length;
  };
   const usuario = renderComponent("");
   const cater = renderComponent("CATER");
   const altaEquipo = renderComponent("ALTA AHORRO") + renderComponent("Alcatel") + renderComponent("ALTA CON") +  renderComponent("ALTA FULL") + renderComponent("ALTA PRE");
   const repro = renderComponent("ALTA REPRO") + renderComponent("TOTA REPRO");
   const porta = renderComponent("PORTA") + renderComponent("Porta") + renderComponent("TOTA");
   const empresaPorta = renderComponent("EMPRESAS PORTA") + renderComponent("PORTA EMPRESAS");
   const empresaRepro = renderComponent("EMPRESAS REPRO");
   const OptionCharges = ` 
   Cargas por Opción: ${cater + altaEquipo + repro + empresaPorta + empresaRepro + porta}
   Cater: ${cater}
   Alta c/eq: ${altaEquipo} 
   Repro: ${repro + empresaRepro}
   Portas: ${porta + empresaPorta}
   ` 
   const copiarTexto = () =>{
    copyData(OptionCharges)
  }

  useEffect(() => {
    setMyData({ ...renderData });
  }, [renderData]);


 
  return (

    <Form>
      <Table className='localsTableRender' color="blue" celled>
        <Table.Header>
          <Table.Row className='localsTableRender' >
            <Table.HeaderCell>TOTAL</Table.HeaderCell>
            <Table.HeaderCell>ALTA C/EQ</Table.HeaderCell>
            <Table.HeaderCell>REPRO</Table.HeaderCell>
            <Table.HeaderCell>CATER</Table.HeaderCell>
            <Table.HeaderCell>PORTA</Table.HeaderCell>
            <Table.HeaderCell>PORTA PYME</Table.HeaderCell>
            <Table.HeaderCell>REPRO PYME</Table.HeaderCell>
            <Table.HeaderCell>LOCAL</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
             <Table.Row className='localsTableRender' >
            <Table.Cell>
            <Label color='blue' ribbon>{renderData.length}</Label>
            </Table.Cell>
            <Table.Cell >{altaEquipo}</Table.Cell>
            <Table.Cell>{repro}</Table.Cell>
            <Table.Cell>{cater}</Table.Cell>
            <Table.Cell>{porta}</Table.Cell>
            <Table.Cell>{empresaPorta}</Table.Cell>
            <Table.Cell>{empresaRepro}</Table.Cell>
            {localOptions == "" ?<Table.Cell>🛄</Table.Cell>  :<Table.Cell style={{color:"blue"}}>{localOptions}</Table.Cell>}
          </Table.Row>
        </Table.Body>
      </Table>
     {localOptions == "" && <Button className='buttons'  onClick={copiarTexto}>Cargas x Opción 🛄</Button> }  
    </Form>
  
  )

  }
export default LocalsRender