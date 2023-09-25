import { useState, React } from "react";
import { myContext } from "./myContext.js";


const MyContextProvider = ({ children }) => {

  //Estado con todos los locales*
  const [filteredLocalsData, setFilteredLocalsData] = useState([])
  const [renderData, setRenderData] = useState([])
  const [localOptions, setLocalOptions] = useState('');
  const [section, setSection] = useState("Locales")
  const [filteredAdmData,setFilteredAdmData] = useState()
  const [infYDev,setInfYDev] = useState({})

  return (
    <div>
      <myContext.Provider value={{
        localOptions, setLocalOptions,
        filteredLocalsData, setFilteredLocalsData,
        renderData, setRenderData,
        section, setSection,
        filteredAdmData,setFilteredAdmData,
        infYDev,setInfYDev
      }}>
        {children}
      </myContext.Provider>
    </div>
  );
}

export default MyContextProvider;