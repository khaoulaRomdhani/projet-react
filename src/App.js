import React, { useState, Fragment } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Header from './components/header'
import Main from "./components/main";
import Home from "./components/home";
import Menu from "./components/menu";
import Apropos from "./components/apropos";
import Inscription from "./components/inscription";
import Connecter from "./components/connecter";
import Admin from "./components/admin";
import Contact from "./components/contact";
import Ingredients from "./components/ingredients";
import AuthGarde from "./athGarde"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Fragment>
        <Header />
        <Routes>
        
            <Route path="/ingredients" element={<Ingredients />}></Route>
         
        </Routes>
      </Fragment>
      <AuthGarde isAuthenticated={isAuthenticated} path="/ingredients" element={<Ingredients />} />
      <Routes>
      <Route path="/" element={<Main />}>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/inscription" element={<Inscription />}></Route>
      <Route path="/apropos" element={<Apropos />}></Route>
      <Route path="/connecter" element={<Connecter setIsAuthenticated={setIsAuthenticated} />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      </Route>
      </Routes>
    </Router>

    /* <BrowserRouter>
       <Routes>
         <Route path="/" element={<Main />}>
           <Route path="/" element={<Home />}></Route>
           <Route path="/menu" element={<Menu />}></Route>
           <Route path="/contact" element={<Contact />}></Route>
           <Route path="/inscription" element={<Inscription />}></Route>
           <Route path="/apropos" element={<Apropos />}></Route>
           <Route path="/connecter" element={<Connecter setIsAuthenticated={setIsAuthenticated} />}></Route>
           <Route path="/admin" element={<Admin />}></Route>
           <AuthGarde isAuthenticated={isAuthenticated} path="/ingredients" element={<Ingredients />} /> 
         </Route>
       </Routes>
     </BrowserRouter>*/
  );
}

export default App;