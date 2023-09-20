import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import * as XLSX from "xlsx";
import { useExcelHandler } from "../logic/xlsx/xlsx";
import HandleData from '../logic/handleData/HandleData';
import "./home.css";
import LocalsForm from '../components/locals/localsForm/LocalsForm';
import LocalsRender from '../components/locals/localsRender/LocalsRender';
import { myContext } from '../context/myContext';
import { Header, Segment } from 'semantic-ui-react';
import HomeSelect from '../components/homeSelect/HomeSelect';
import Admin from '../components/admin/Admin';
import PdvTotalTable from '../components/admin/pdvTotalTable/PdvTotalTable';



const Home = ({ page }) => {
  const { handleChange, handleSubmit, excelData, excelFile } = useExcelHandler();
  const { filteredLocalsData,section } = useContext(myContext);
 

 
  return (
    <div className='homeCont'>
      
     <Segment className='row1' color='blue'>
     <form onSubmit={handleSubmit}>
        <Form.Label as={"h4"} style={{fontWeight:"bold"}}>Bajada reporte diario.</Form.Label>
        <Form.Group  onChange={handleChange} controlId="formFile" size="sm" className="mb-3 uploadFileForm">
        <Form.Control type="file" />
        <Button  type="submit" variant="primary">Subir</Button>
      </Form.Group>
      
     <HomeSelect></HomeSelect>
   
        {excelData.length > 0 ? (
          <div style={{fontWeight:"bold", color:"green"}}>Data cargada</div>
        ) : (
          <div style={{fontWeight:"bold", color:"red"}}>No hay data aún</div>
        )}

      </form>
     </Segment>
     
    {section == "Locales" ? <div>
        {excelData.length > 0 && (
          <div >
            <LocalsForm className='row2'   excelData={excelData} />
            <HandleData excelData={excelData} />
          </div>
        )}
          <LocalsRender  />
         
      </div> :<> <Admin></Admin> <PdvTotalTable></PdvTotalTable> </>}
     
    </div>
  );
}

export default Home;