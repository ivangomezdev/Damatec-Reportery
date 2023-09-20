import React, { useContext } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import "../../styles/pdvTotalTable.css"
import { myContext } from '../../../context/myContext'

const PdvTotalTable = () => {
    
    const {filteredAdmData} = useContext(myContext)

    const dataMap = ((seller)=>{
       const data =  filteredAdmData.filter((i)=>{
            return  i.USUARIO.startsWith(seller)
    })
     return data.length
})
  
   
    const pdv = dataMap("PDV")
    const call = dataMap("EG") + dataMap("FV") + dataMap("JS") + dataMap("DS") + dataMap("NB")
    const caza = dataMap("EF") + dataMap("MB")
   

    const textoACopiar = "Texto que quieres copiar al portapapeles";

 
        return (
        <Table className='pdvTable' basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Asesor (Pendiente en bandeja)</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                <Header.Content>
                  PDV-
                  <Header.Subheader></Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{pdv}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                <Header.Content>
                  CALL
              
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{call}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                <Header.Content>
                  CAZADORES
                  <Header.Subheader></Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{caza}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
                <Header.Content>
                  TOTAL
                  
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{pdv + caza + call}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
  )
}

export default PdvTotalTable