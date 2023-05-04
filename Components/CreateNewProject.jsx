import React, { useEffect, useState } from 'react';
import { Button, Modal, TextField, Box, CircularProgress } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import Select from 'react-select';
import { API_URL, skillOptions } from '../Utils/Constants';
import axios from 'axios';
import { auth, storage } from '../Utils/firebase';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#212121',
  bgcolor: '#212121',
  p: 4,
  borderRadius: '5px',
};

const proyectImgStyle = {
  width: ' 150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '0.5rem',
};
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#545454',
    borderColor: state.isFocused ? '#666666' : '#545454',
    backgroundColor: '#545454',
    borderColor: state.isFocused ? '#666666' : '#545454',
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: '20px',
    backgroundColor: '#4098d3',
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
      borderRadius: '20px',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    borderRadius: '20px',
    padding: '0px 8px',
    borderRadius: '20px',
    padding: '0px 8px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#545454',
    color: '#dddddd',
    ':hover': {
      backgroundColor: '#545454',
      backgroundColor: '#545454',
      color: '#dddddd',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#666666' : '#545454',
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
  const handleClose = () => {
    setOpen(false);
    setName('');
    setDescription('');
    setAdditionalInfo('');
    setSkills([]);
    setSelectedOptions([]);
    handleReset();
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [imageUser, setImageUser] = useState(
    'https://cdn.discordapp.com/attachments/408479278175485952/1099539280428290138/dental-project-management-the-ultimate-guide.png',
  );
  const [uploadUserImage, setUploadUserImage] = useState(null);
  const [image, setImage] = useState();
  const [userImageURL, setUserImageURL] = useState(null);
  const [isloading, setisloading] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    if (uploadUserImage) {
      setisloading(true);
      setUploadUserImage(uploadUserImage);
      handleImageUpload();
      setisloading(false);
    }
  }, [uploadUserImage]);
  const handleChangeImageUser = (e) => {
    try {
      const selectedImage = e.target.files[0];
      if (!selectedImage) {
        setImageUser(null);
        return;
      }
      setImageUser(URL.createObjectURL(selectedImage));
      setUploadUserImage(selectedImage);
    } catch (error) {
      setImageUser(null);
    }
  };
  const handleImageUpload = () => {
    try {
      setisloading(true);
      if (uploadUserImage == null) return;
      const imageRef = ref(storage, `projectImages/${uuidv4()}`);
      uploadBytes(imageRef, uploadUserImage).then((snapshot) => {
        getDownloadURL(imageRef).then((snapshot) => {
          setUserImageURL(snapshot);
          setisloading(false);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = (selected) => {
    const values = selected.map((option) => option.label);
    setSelectedOptions(selected);
    setSkills(values);
  };

  const handleSubmit = (event) => {
    setisloading(true);
    event.preventDefault();
    const projectData = {
      name: name,
      description: description,
      skills: skills,
      additionalInfo: additionalInfo,
      owner: auth.currentUser.uid,
      image: userImageURL,

      status: 'Reclutando',
    };
    axios.post(API_URL + 'project', projectData).then((res) => {
      handleClose();
      router.push(
        {
          pathname: '/ProjectDetails',
          query: { id: res.data.projectID, user: auth.currentUser.uid },
        },
        '/ProjectDetails',
      );
    });
    setisloading(false);
  };
  return (
    <div>
      <AddIcon onClick={handleOpen} className="icon" sx={{ fontSize: 40 }} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step key={'1'}>
              <StepLabel>
                <h4 className="text">{'Nombre del proyecto'}</h4>
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  <div className="d-flex flex-column">
                    <Button
                      aria-label="upload picture"
                      component="label"
                      className=" mx-auto"
                      disabled={isloading}
                    >
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={handleChangeImageUser}
                      />
                      {isloading && (
                        <CircularProgress
                          disableShrink
                          className="position-absolute"
                        />
                      )}
                      <img
                        src={imageUser}
                        alt="userIMage"
                        style={proyectImgStyle}
                      />
                    </Button>
                    <TextField
                      style={{
                        backgroundColor: '#545454',
                        border: 'none',
                        color: 'white',
                        marginBottom: '1rem',
                        borderRadius: '5px',
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
                      variant="filled"
                    />
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                      disabled={isloading || !name}
                    >
                      {'Siguiente'}
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step key={'2'}>
              <StepLabel>
                <h4 className="text">{'Acerca de tu proyecto'}</h4>
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  <div className="d-flex flex-column">
                    <TextField
                      style={{
                        backgroundColor: '#545454',
                        border: 'none',
                        color: 'white',
                        marginBottom: '1rem',
                        borderRadius: '5px',
                      }}
                      label="Descripción"
                      fullWidth
                      inputProps={{ style: { color: '#dddddd' } }}
                      multiline
                      rows={3}
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                    <TextField
                      style={{
                        backgroundColor: '#545454',
                        border: 'none',
                        color: 'white',
                        borderRadius: '5px',
                      }}
                      label="Información adicional"
                      fullWidth
                      multiline
                      inputProps={{ style: { color: '#dddddd' } }}
                      rows={3}
                      value={additionalInfo}
                      onChange={(event) =>
                        setAdditionalInfo(event.target.value)
                      }
                    />
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                      disabled={!additionalInfo || !description}
                    >
                      {'Siguiente'}
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      {'Regresar'}{' '}
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step key={'3'}>
              <StepLabel>
                {' '}
                <h4 className="text">{'Habilidades para tu proyecto'}</h4>
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  <div className="d-flex flex-column">
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
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{ mt: 1, mr: 1 }}
                      disabled={!skills.length}
                    >
                      {'Crear Proyecto'}
                    </Button>

                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      {'Regresar'}
                    </Button>
                    {isloading && (
                      <CircularProgress
                        disableShrink
                        className="position-absolute"
                      />
                    )}
                  </div>
                </Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateNewProject;
