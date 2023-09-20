
import { useContext, useState,react } from "react";
import { myContext } from "../../context/myContext";

export const localsForm = () => {
    const { localOptions, setLocalOptions, filteredLocalsData, setRenderData,renderData,localsTag} = useContext(myContext);
    const [localDate, setLocalDate] = useState('');
    const [localNameValue, setLocalNameValue] = useState('');
    
    const changeOptionsSelect = (e) => {
        const { value } = e.target;
        setLocalNameValue(value);
      }
      
       const changeOptionsDate = (e) => {
        const { value } = e.target;
        setLocalDate(value);
      }
      
       const handleSubmit = (e) => {
        e.preventDefault();
        // Almacena temporalmente los valores en el estado local
        const tempLocalOptions = localNameValue;
        const tempLocalDate = localDate;
      
        const filterByOptions = filteredLocalsData.filter((item) => {
          return item.USUARIO.includes(tempLocalOptions);
        });
      
        const filterAllByDate = filterByOptions.filter((item) => {
          return item.CREADO.includes(tempLocalDate);
        });
      
        // Aplica los cambios al estado global después de filtrar
        setRenderData(filterAllByDate);
        setLocalOptions(tempLocalOptions);
      }
      
       const locales = [
        { value: '', label: 'Todos' },
        { value: 'M-', label: 'Merlo' },
        { value: 'SJ-', label: 'San Juan' },
        { value: 'SL-', label: 'San Luis' },
        { value: 'TY-', label: 'Tunuyan' },
      ];
      const values = locales.map((val)=>{
        return val.value
      })
      
     
     

    return {
        locales,changeOptionsSelect,changeOptionsDate,handleSubmit,localDate
        ,localNameValue
    }
 
}