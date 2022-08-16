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
          <Navbar.Brand href="#home">
            <img
              className="brandLogo"
              src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Fa.png?alt=media&token=cf27f255-4014-48aa-88b1-f2d0ed1a24c1"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">About me</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Source Code
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeHeader;
