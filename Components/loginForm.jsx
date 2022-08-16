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

function loginForm() {
  return (
    <div className="login-container">
      <div className="perks">
        <h3 id="perks">Unete a la comunidad</h3>
        <p>
          Miles de companeros te esperan, recuerda que todo proyecto tiene un
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
            "https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Fpath179-7.png?alt=media&token=69c2225f-c4dd-47e2-a3f5-32af569311ce"
          }
          width={70}
          height={70}
          layout="intrinsic"
          className="login-image"
        />
        <h1 className="loginTitle">Welcome</h1>
        <div className="loginInputs">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <AccountCircleIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <LockIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="socialGroupButtons">
          <IconButton aria-label="delete">
            <GoogleIcon
              className="loginIcons"
              fontSize="large"
              sx={{ color: "darkred" }}
            />
          </IconButton>
          <IconButton aria-label="delete">
            <FacebookIcon
              className="loginIcons"
              fontSize="large"
              sx={{ color: "#1877f2" }}
            />
          </IconButton>
          <IconButton aria-label="delete" size="small" sx={{ color: "purple" }}>
            <GitHubIcon className="loginIcons" fontSize="large" />
          </IconButton>
        </div>
   
          <button variant="contained" className="btn mb-2 btn-dark Button signInButton">
            {"Ingresar a su cuenta"}
          </button>
          <button variant="contained" className="btn mb-2 btn-dark Button signInButton">
            {"Registarse"}
          </button>
    
      </div>
    </div>
  );
}

export default loginForm;
