import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./layout.css"

const Layout = () => {
  return (
    
    <div className="navBar">
      <NavBar />
      
      <Outlet />   
      </div>
  );
};

export default Layout;