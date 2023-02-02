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
              src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Fcoworklogo.png?alt=media&token=26364034-e432-4237-8dcd-3db1ca3bff41"
              alt=""
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeHeader;
