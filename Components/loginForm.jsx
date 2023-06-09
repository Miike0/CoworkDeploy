import React from 'react';

import { IconButton } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LaptopIcon from '@mui/icons-material/Laptop';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import JoinModal from './JoinModal';
import {
  loginWithFacebook,
  loginWithGoogle,
  signInWithEmail,
} from '../Utils/firebase';
import { useState } from 'react';
import NoticeOfPrivacyModal from './NoticeOfPrivacyModal';


function loginForm() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div className="login-container">
      <div className="perks">
        <h3 id="perks">Únete a la comunidad</h3>
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
              <h5>Recomendaciones a tu medida</h5>
            </div>
          </li>
          <li className="perkList ">
            <div className="d-flex perk-component">
              <LaptopIcon className="me-4" sx={{ fontSize: 80 }} />
              <h5>Proyectos Inovadores</h5>
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
              style={{ backgroundColor: '#545454', border: 'none' }}
            >
              <AccountCircleIcon sx={{ color: '#dddd' }} />
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => setemail(e.target.value)}
              placeholder="Correo electronico"
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="loginInputs text-light"
              style={{ backgroundColor: '#545454', border: 'none' }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{
                backgroundColor: '#545454',
                border: 'none',
                outlineColor: 'none',
              }}
            >
              <LockIcon sx={{ color: '#dddd' }} />
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Contraseña"
              aria-label="Username"
              type="password"
              className="loginInputs text-light"
              aria-describedby="basic-addon1"
              style={{ backgroundColor: '#545454', border: 'none' }}
            />
          </InputGroup>
        </div>

        <div className="d-flex flex-column">
          <button
            variant="contained"
            className="btn mb-2 btn-dark outline-btn loginBtn "
            onClick={() => signInWithEmail(email, password)}
          >
            {'Ingresar a tu cuenta'}
          </button>
          {/*           <button
            variant="contained"
            className="btn mb-2 btn-dark filled-btn loginBtn"
          >
            {"Registarse"}
          </button> */}
          <JoinModal></JoinModal>
        </div>
        <div className="socialGroupButtons">
          <IconButton aria-label="delete" onClick={loginWithGoogle}>
            <GoogleIcon
              className="socialIconButtpn"
              fontSize="large"
              sx={{ color: '#4285F4' }}
            />
          </IconButton>
          <IconButton aria-label="delete" onClick={loginWithFacebook}>
            <FacebookIcon
              className="socialIconButtpn"
              fontSize="large"
              sx={{ color: '#4267B2' }}
            />
          </IconButton>
        </div>
        <NoticeOfPrivacyModal/>
      </div>
    </div>
  );
}

export default loginForm;
