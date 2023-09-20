import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Contact from '../../pages/Contact'
import Layout from '../Layout/Layout'
import MyContextProvider from '../../context/MyContextProvider'
const MainRoutes = () => {
  return (
    
  <MyContextProvider>
    <Routes>
    <Route path='' element={<Layout/>}>
  <Route index element={<Home page={"Home"}/>}/>
  <Route path='/contact' element={<Contact title={"Iniciar Sesión"} label1={"Email"} label2={"Contraseña"} buttonText={"Iniciar Sesión"}/>}></Route>
  </Route>
 </Routes>
 </MyContextProvider>
 
  )
}

export default MainRoutes