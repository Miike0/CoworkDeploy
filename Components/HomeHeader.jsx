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
        <Container>
          <Navbar.Brand href="#home" className='navBrand'>
            <img
              className="brandLogo"
              src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Fpath179-7.png?alt=media&token=69c2225f-c4dd-47e2-a3f5-32af569311ce"
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
