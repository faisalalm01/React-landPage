import React, { Component } from "react";
import Navbarr from "../Component/Navbar";
// import Cardd from "../Component/Card";
import Footer from '../Component/Footer'
import Banners from "../Component/Banner";
// import { Container } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbarr />
        <Banners/>
        <Footer />
      </div>
    );
  }
}
