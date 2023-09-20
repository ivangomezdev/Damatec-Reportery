import React, { useContext, useEffect } from 'react';
import { myContext } from '../../context/myContext';

const HandleData = ({ excelData }) => {
  const { setFilteredLocalsData, setFilteredAdmData } = useContext(myContext);

  useEffect(() => {
    const fetchData = async () => {
     
      

      //filtro todos los usuarios
      const mapUser = excelData.map((data) => data.USUARIO);
      //filtro por usuario locales
      const allLocals = mapUser.filter((i) => i && (i.startsWith('M-') || i.startsWith('SJ-') || i.startsWith('SL-') || i.startsWith('TY-')));
      //filtro por usuario ADM
      const allAdm = mapUser.filter((i) => { return !allLocals.includes(i) })

      //filtro toda la data que tenga como usuario locales
      const filterAllLocalData = excelData.filter((i) => allLocals.includes(i.USUARIO));
      setFilteredLocalsData(filterAllLocalData);
      //filtro toda la data que tenga como usuario ADM
      const filterAllAdminUserData = excelData.filter((i) => allAdm.includes(i.USUARIO));
      // filtro solo por la data que necesito
      const filterAllAdminData = filterAllAdminUserData.filter((i) => {
        return ["DIFERIDA AUDITORIA", "PENDIENTE AUDITORIA", "PENDIENTE VERIFICACIÓN", "PENDIENTE CARGA MOVISTAR", "DIFERIDA CARGA MOVISTAR", "EN TRANSITO"].includes(i.ESTADO)
          ;
      })


      setFilteredAdmData(filterAllAdminData)

      console.log("efecto disparado");
    }
    fetchData()
  }, [excelData]);

};

export default HandleData;

