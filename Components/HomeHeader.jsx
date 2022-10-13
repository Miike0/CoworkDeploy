import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HomeHeader() {
  return (
    <div className="navContainer">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="mainNav">
        <Container className="navContainer">
          <Navbar.Brand href="#home" className="navBrand">
            <img
              className="brandLogo"
              src="https://cdn.discordapp.com/attachments/408479278175485952/1026945474441261187/blueSymbol.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">Nosotros</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeHeader;
