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
import { Row,Col } from "react-bootstrap";


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
            <GroupIcon className="me-4 ms--2" sx={{ fontSize: 50 }} />
            <h5>Comunidad Amistosa</h5>
          </li>
          <li className="perkList">
            <CheckCircleIcon className="me-4" sx={{ fontSize: 50 }} />
            <h5>Recomendasiones a tu medida</h5>
          </li>
          <li className="perkList">
            <LaptopIcon className="me-4" sx={{ fontSize: 50 }} />
            <h5>Proyectos Inovadores. </h5>
          </li>
        </ul>
      </div>
      <div className="login-form">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Fa.png?alt=media&token=cf27f255-4014-48aa-88b1-f2d0ed1a24c1"
          }
          width={250}
          layout="intrinsic"
          className="login-image mb-3 mt-3"
        />

        <div className='mt-3 '>
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
              style={{ backgroundColor: "#545454", border: "none", outlineColor:'none' }}
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
            className="btn mb-2 btn-dark loginBtn rounded-pill"
          >
            {"Ingresar a su cuenta"}
          </button>
          <button
            variant="contained"
            className="btn mb-2 btn-dark loginBtn rounded-pill"
            style={{ backgroundColor: "#D49B54" }}
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
