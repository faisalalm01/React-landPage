import React, { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Navbar.css"


export default class Navbarr extends Component {
  render() {
    return (
     

      <Navbar scrolling dark expand="md" fixed="top" bg="primary">
        <Container>
        <Navbar.Brand href="#home">Mine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menumain">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
     
    );
  }
}
