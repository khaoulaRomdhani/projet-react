import React from 'react'
import Header from "./header";
import Footer from './footer';
import "../css/style.css"
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer/>
      
    </div>
  );
}

export default Main;