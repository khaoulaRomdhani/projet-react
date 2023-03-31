import React from 'react'

import Footer from './footer';
import "../css/style.css"
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      
      <Outlet></Outlet>
      <Footer/>
      
    </div>
  );
}

export default Main;