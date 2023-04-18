import React, { useState } from 'react';
import {
  Button,
  Chip,
  Modal,
  TextField,
  Box,
  Typography,
  IconButton,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import Select from 'react-select';
import {
  API_URL,
  skillOptions,
  skillsValues,
  userAvatarDefault,
} from '../Utils/Constants';
import { BorderColor } from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';
import { auth } from '../Utils/firebase';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#212121',
  p: 4,
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#545454',
    borderColor: state.isFocused ? '#666666' : '#545454',
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: '20px',
    backgroundColor: '#4098d3',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    borderRadius: '20px',
    backgroundColor: 'none',
    padding: '2px 8px',
    fontSize: '0.9rem',
    color: '#dddddd',
    borderWidth: '3px',
    borderColor: '#4098d3',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    borderRadius: '20px',
    ':hover': {
      backgroundColor: 'none',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    borderRadius: '20px',
    padding: '0px 8px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#545454',
    color: '#dddddd',
    ':hover': {
      backgroundColor: '#545454',
    }, // color de fondo deseado
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#666666' : '#545454',
  }),
};

const CreateNewProject = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [skills, setSkills] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [imageUser, setImageUser] = useState(userAvatarDefault);
  const [uploadUserImage, setUploadUserImage] = useState(null);

  const handleChangeImageUser = (e) => {
    try {
      setImageUser(URL.createObjectURL(e.target.files[0]));
      setUploadUserImage(e.target.files[0].name);
    } catch (error) {
      setImageUser(null);
    }
  };

  const handleSelectChange = (selected) => {
    const values = selected.map((option) => option.label);
    setSelectedOptions(selected);
    setSkills(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const projectData = {
      name: name,
      description: description,
      skills: skills,
      owner: auth.currentUser.uid,
      image: imageUser,
    };
    axios.post(API_URL + 'project', projectData);
    handleClose();
  };
  return (
    <div>
      <AddIcon onClick={handleOpen} className="icon" sx={{ fontSize: 40 }} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h5"
            className="mx-auto"
            sx={{ color: '#dddd', width: 'fit-content' }}
          >
            Crear nuevo proyecto
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-center">
              <Button
                aria-label="upload picture"
                component="label"
                className=" mx-auto"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleChangeImageUser}
                />
                <img
                  src={imageUser}
                  alt="userIMage"
                  className="userPhoto-img"
                />
              </Button>
            </div>
            <div>
              <TextField
                style={{
                  backgroundColor: '#545454',
                  border: 'none',
                  color: 'white',
                  marginBottom: '1rem',
                }}
                label="Nombre del Proyecto"
                fullWidth
                multiline
                inputProps={{ style: { color: '#dddddd' } }}
                rows={1}
                focusedBorderColor="#ddddd"
                focusedInputProps={{ color: '#4098d3' }}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                style={{
                  backgroundColor: '#545454',
                  border: 'none',
                  color: 'white',
                  marginBottom: '1rem',
                }}
                label="Descripción"
                fullWidth
                inputProps={{ style: { color: '#dddddd' } }}
                multiline
                rows={4}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <TextField
                style={{
                  backgroundColor: '#545454',
                  border: 'none',
                  color: 'white',
                }}
                label="Información adicional"
                fullWidth
                multiline
                inputProps={{ style: { color: '#dddddd' } }}
                rows={4}
                value={additionalInfo}
                onChange={(event) => setAdditionalInfo(event.target.value)}
              />
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Select
                styles={customStyles}
                isMulti
                name="colors"
                className="basic-multi-select"
                classNamePrefix="select"
                options={skillOptions}
                value={selectedOptions}
                onChange={handleSelectChange}
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Crear proyecto
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateNewProject;
