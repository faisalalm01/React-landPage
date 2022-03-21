import React, { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./style.css"


export default class Navbarr extends Component {
  render() {
    return (
     

      <Navbar expand="md" fixed="top" variant="dark" bg="primary">
        <Container>
        <Navbar.Brand href="#home">Main</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menumain">
            <Nav.Link className="btn btn-primary m-2" href="#home">Home</Nav.Link>
            <Nav.Link className="btn btn-primary m-2"href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
