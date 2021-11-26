import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/css/bootstrap.css";
//import React from "react";

//Import Componentes
import Home from './Components/Home';
import Create from './Components/Create';
import Edit from './Components/Edit';
import List from './Components/List';
import Login from './Components/Login';

function App() {
  return (
    <div className="App d-flex">
      <div class="bg-dark bg-primary flex-shrink-0  text-white min-vh-100" style={{width: "235px"}}>
        <div  class="d-flex align-items-center">
          <i class="bi bi-bootstrap-fill m-2 fs-2"/>
          <span class="fs-3">Menu</span>
        </div>
        <hr /> 
        <ul class="nav">
          <li class="d-block p-3">
            <Link to={"/"} className="nav-link text-white lead">
              <i class="bi bi-house m-2  fs-5" />
              Inicio
            </Link>
          </li>
          <li class="d-block p-3">
            <Link to={"/login"} className="nav-link text-white lead">
              <i class="bi bi-box-arrow-in-right m-2 fs-5" />
              Iniciar Sesión
            </Link>
          </li>
          <li class="d-block p-3">
            <Link to={"/create"} className="nav-link text-white lead">
              <i class="bi bi-plus-square m-2 fs-5"></i>
                Crear activos
              <i class="bi bi-chevron-right"></i>
            </Link>
          </li>
          <li class="d-block p-3">
            <Link to={"/list"} className="nav-link text-white lead">
              <i class="bi bi-list-columns-reverse m-2 fs-5"></i>
                Listar activos
              <i class="bi bi-chevron-right"></i>
              </Link>
          </li> 
          <li class="d-block p-3">
            <Link to={"/edit"} className="nav-link text-white lead">
              <i class="bi bi-pencil m-2 fs-5"></i>
                Editar activos
              <i class="bi bi-chevron-right"></i>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Edit' element={<Edit />} />
        <Route path='/List' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
