import * as XLSX from "xlsx";
import { useState, useEffect, useContext } from "react";
import { myContext } from "../../context/myContext";

export const useExcelHandler = () => {
  const {setInfYDev} = useContext(myContext)

  const [excelFile, setExcelFile] = useState([]);
  const [excelData, setExcelData] = useState([]);


  const handleChange = (e) => {
    const data = e.target.files[0];
    let reader = new FileReader();
    
    reader.readAsArrayBuffer(data);
    reader.onload = (e) => {
      setExcelFile(e.target.result);
    };
  };

  const mapProductsState = excelData.filter((p) => {
    return p.ESTADO === "DEVUELTA MOVISTAR" || p.ESTADO === "INFORMADA MOVISTAR";
   });

 

  useEffect(() => {
  setInfYDev(mapProductsState)
  }, [excelData]);





  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workBook = XLSX.read(excelFile, { type: "buffer" });
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(workSheet);
      setExcelData(data);
    } else {
      console.log("Nada seleccionado");
    }
  };
  



  return { excelFile, excelData, handleChange, handleSubmit ,setExcelData };
};