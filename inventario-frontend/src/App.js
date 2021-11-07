import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import CreateActivos from "./components/create-activos.component";
import EditActivos from "./components/edit-activos.component";
import ActivosList from "./components/activos-list.component";
import Home  from "./components/Home.component";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
          <Nav>
              <Link to={"/create-activos"} className="nav-link">
              Crear activos
              </Link>
            </Nav>
            <Nav>
              <Link to={"/activos-list"} className="nav-link">
                Listar activos
              </Link>
            </Nav>
            <Nav>
              <Link to={"/edit-activos"} className="nav-link">
                Editar activos
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/create-activos" component={CreateActivos} />
                <Route path="/edit-activos/:id" component={EditActivos} />
                <Route path="/activos-list" component={ActivosList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
