import React from "react";
import Image from "next/image";
import { TextField, Button, IconButton } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LaptopIcon from "@mui/icons-material/Laptop";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col } from "react-bootstrap";

function loginForm() {
  return (
    <div className="login-container">
      <div className="perks">
        <h3 id="perks">Unete a la comunidad</h3>
        <p>
          Miles de compañeros te esperan, recuerda que todo proyecto tiene un
          futuro
        </p>

        <ul>
          <li className="perkList">
            <div className="d-flex perk-component">
              <GroupIcon className="me-4 ms--2" sx={{ fontSize: 80 }} />
              <h5>Comunidad Amistosa</h5>
            </div>
          </li>
          <li className="perkList">
            <div className="d-flex perk-component">
              <CheckCircleIcon className="me-4" sx={{ fontSize: 80 }} />
              <h5>Recomendasiones a tu medida</h5>
            </div>
          </li>
          <li className="perkList ">
            <div className="d-flex perk-component">
              <LaptopIcon className="me-4" sx={{ fontSize: 80 }} />
              <h5>Proyectos Inovadores. </h5>
            </div>
          </li>
        </ul>
      </div>
      <div className="login-form">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2FblueSymbol.png?alt=media&token=bfec1fa5-929b-48f1-b0a9-a142eb230051"
          width={250}
          layout="intrinsic"
          className="login-image mb-3 mt-3"
        />

        <div className="mt-3 ">
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{ backgroundColor: "#545454", border: "none" }}
            >
              <AccountCircleIcon sx={{ color: "#dddd" }} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Correo electronico"
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="loginInputs text-light"
              style={{ backgroundColor: "#545454", border: "none" }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{
                backgroundColor: "#545454",
                border: "none",
                outlineColor: "none",
              }}
            >
              <LockIcon sx={{ color: "#dddd" }} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Contraseña"
              aria-label="Username"
              type="password"
              className="loginInputs text-light"
              aria-describedby="basic-addon1"
              style={{ backgroundColor: "#545454", border: "none" }}
            />
          </InputGroup>
        </div>

        <div className="d-flex flex-column">
          <button
            variant="contained"
            className="btn mb-2 btn-dark outline-btn loginBtn "
          >
            {"Ingresar a tu cuenta"}
          </button>
          <button
            variant="contained"
            className="btn mb-2 btn-dark filled-btn loginBtn"
          >
            {"Registarse"}
          </button>
        </div>
        <div className="socialGroupButtons">
          <IconButton aria-label="delete">
            <GoogleIcon
              className="socialIconButtpn"
              fontSize="large"
              sx={{ color: "#4285F4" }}
            />
          </IconButton>
          <IconButton aria-label="delete">
            <FacebookIcon
              className="socialIconButtpn"
              fontSize="large"
              sx={{ color: "#4267B2" }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default loginForm;
