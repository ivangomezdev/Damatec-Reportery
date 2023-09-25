import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react'
import "../../styles/homeSelect.css"
import { myContext } from '../../context/myContext'
import { useExcelHandler } from '../../logic/xlsx/xlsx'


const HomeSelect = () => {
   const {setSection,section,filteredLocalsData} = useContext(myContext)
   
    const handleClick = () =>{ 
      if (filteredLocalsData.length > 0) {
        setSection("Administración")
        
      }else{
        alert("Debes cargar data")
      }
    }

   
  return (
    <Segment >
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>O</Divider>

      <Grid.Row  verticalAlign='middle'>
        <Grid.Column className='row1' onClick={()=> setSection("Locales")}>
          <Header icon>
            <Icon  name='sitemap' />
           Locales     
          </Header>
        </Grid.Column>
        
        <Grid.Column className='row22' onClick={handleClick}>
          <Header icon>
            <Icon name='paste' />
            Administración
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default HomeSelect