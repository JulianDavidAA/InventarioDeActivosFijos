import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
//import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

//Import Componentes
import Home from './Components/Home';
import Create from './Components/Create';
import Edit from './Components/Edit';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              Inicio
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav>
              <Link to={"/create"} className="nav-link">
                Crear activos
              </Link>
            </Nav>
            <Nav>
              <Link to={"/list"} className="nav-link">
                Listar activos
              </Link>
            </Nav>
            <Nav>
              <Link to={"/edit"} className="nav-link">
                Editar activos
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Edit' element={<Edit />} />
        <Route path='/List' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
