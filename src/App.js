import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/home";
import Menu from "./components/menu";
import Apropos from "./components/apropos";
import Inscription from "./components/inscription";
import Connecter from "./components/connecter";
import Admin from "./components/admin";
import Contact from "./components/contact";
import Ingredients from "./components/ingredients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/inscription" element={<Inscription />}></Route>
          <Route path="/apropos" element={<Apropos />}></Route>
          <Route path="/connecter" element={<Connecter />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/ingredients" element={<Ingredients />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
