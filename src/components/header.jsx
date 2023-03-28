import React from 'react'
import"../css/style.css"
import {

    Container,
    Nav,
    Navbar,
    Button,
    
    
  } from "react-bootstrap";
 

function Header() {
 
    return (
      <div >
        <Navbar sm={12} variant="light">

        <Container>
          
         <div>
          {/*
            <NavLink to="/"><img src="https://thumbs.dreamstime.com/b/food-talk-logo-images-illustration-design-food-talk-logo-images-illustration-215434984.jpg" class="logo"/></NavLink>
    */}
          <Navbar.Brand href="/home" ><b>TastyFood</b></Navbar.Brand>
          </div>
          <Nav className="d-flex justify-content-around">
         
            <Nav.Link  href="/home">Home</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link   href="/Apropos">Apropos De Nous</Nav.Link>
            <Nav.Link   href="/Ingredients">ingredients</Nav.Link>
            <Button   href="/Inscription" id="lastnav"variant="outline-warning">Inscription</Button>
           
          </Nav>
          
        </Container>
    </Navbar>
   
      </div>   
      );
    }
    

export default Header;