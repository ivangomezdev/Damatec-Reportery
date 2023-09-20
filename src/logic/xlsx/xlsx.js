import * as XLSX from "xlsx";
import { useState, useEffect } from "react";

export const useExcelHandler = () => {
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

  useEffect(() => {

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