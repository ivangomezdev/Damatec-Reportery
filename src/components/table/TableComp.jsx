import React from 'react'
import SelectMenu from '../selectMenu/SelectMenu'
import { Header, Image, Table } from 'semantic-ui-react'

const TableComp = ({props,tHeader}) => {
   
    return (
      <Table className='pdvTable' basic='very' celled collapsing>
        <Table.Header>
        <Table.Row>
        {tHeader && tHeader.map((item,index)=> (
        <Table.HeaderCell>{item.tableTitle}</Table.HeaderCell>
        ))}
          </Table.Row>
        </Table.Header>
  
        <Table.Body>
            {props &&
          props.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={item.image} rounded size='mini' />
                  <Header.Content>
                    {item.name}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell style={{ textAlign: 'center' }}>{item.cantidad}</Table.Cell>
              <Table.Cell style={{ color: 'RED', textAlign: 'center' }}>{item.atraso}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }

export default TableComp