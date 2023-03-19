import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Form from "react-bootstrap/Form";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { InputGroup } from 'react-bootstrap';
import { registerNewUser } from '../Utils/firebase';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: "#212121",
    p: 4,
};

function JoinModal() {
    const [open, setOpen] = useState(false);
    const [Name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen} className="btn mb-2 btn-dark filled-btn loginBtn w-100"
            >Registrarse</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='d-flex flex-column justify-content-center align-items-cente'>
                        <Avatar className='mx-auto' sx={{ m: 1, bgcolor: '#4098d3' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" className='mx-auto' sx={{ color: '#dddd', width:'fit-content' }}>
                            Sign up
                        </Typography>
                    </div>

                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text
                                        id="basic-addon1"
                                        style={{ backgroundColor: "#545454", border: "none" }}
                                    >
                                        <PersonIcon sx={{ color: "#dddd" }} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Nombre(s)"
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                        className="loginInputs text-light"
                                        style={{ backgroundColor: "#545454", border: "none" }}
                                        onChange={(e)=> setName(e.target.value)}
                                    />
                                </InputGroup>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text
                                        id="basic-addon1"
                                        style={{ backgroundColor: "#545454", border: "none" }}
                                    >
                                        <PersonOutlineIcon sx={{ color: "#dddd" }} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Apellido(s)"
                                        aria-label="lastName"
                                        aria-describedby="basic-addon1"
                                        className="loginInputs text-light"
                                        style={{ backgroundColor: "#545454", border: "none" }}
                                        onChange={(e)=> setlastName(e.target.value)}
                                    />
                                </InputGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text
                                        id="basic-addon1"
                                        style={{ backgroundColor: "#545454", border: "none" }}
                                    >
                                        <MailIcon sx={{ color: "#dddd" }} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Correo electronico"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        className="loginInputs text-light"
                                        style={{ backgroundColor: "#545454", border: "none" }}
                                        onChange={(e)=> setEmail(e.target.value)}
                                    />
                                </InputGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text
                                        id="basic-addon1"
                                        style={{ backgroundColor: "#545454", border: "none" }}
                                    >
                                        <LockIcon sx={{ color: "#dddd" }} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        required
                                        placeholder="Password"
                                        type="password"
                                        style={{ backgroundColor: "#545454", border: "none" }}
                                        onChange={(e)=> setPassword(e.target.value)}
                                    />
                                </InputGroup>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="btn mb-2 btn-dark outline-btn loginBtn mt-2 "
                            onClick={()=> registerNewUser(Email, Password)}
                        >
                            {'Registrarme'}
                        </Button>
                    </Box>
                </Box>

            </Modal>
        </div>
    )
}

export default JoinModal