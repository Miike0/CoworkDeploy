import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TextField from '@mui/material/TextField';
import { Autocomplete, Chip } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import {
  userAvatarDefault,
  udgCampus,
  skillsValues,
  userSettingsDesktopImagePhrase,
  API_URL,
} from '../Utils/Constants';
import axios from 'axios';
import { auth, storage } from '../Utils/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps_ = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#4098d3',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4098d3',
    },
  },
  input: {
    color: 'white',
  },
  '&.Mui-focused .MuiInputLabel-outlined': {
    color: 'white',
  },
});
const CssAutocomplete = styled(Autocomplete)({
  color: 'white',
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#4098d3',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4098d3',
    },
  },
  input: {
    color: 'white',
  },
  '&.Mui-focused .MuiInputLabel-outlined': {
    color: 'white',
  },
  autoCompleteLabel: {
    color: 'white',
  },
  '& label': {
    color: 'white',
  },
  '.MuiSvgIcon-root ': {
    fill: 'white !important',
  },
});
const CssSelect = styled(Select)({
  '& label.Mui-focused': {
    color: 'white',
  },
  color: 'white',
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#4098d3',
  },
  '.MuiSvgIcon-root ': {
    fill: 'white !important',
  },
});

function getStyles(name, chip, theme) {
  return {
    fontWeight:
      chip.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function UserSettings() {
  const [userImage, setUserImage] = useState(userAvatarDefault);
  const [uploadProjectImage, setUploadProjectImage] = useState(null);
  const [skills, setSkills] = useState([]);
  const [uid, setUid] = React.useState(null);
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [location, setLocataion] = useState(null);
  const [campus, setCampus] = useState(null);
  const theme = useTheme();
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  const [imageUser, setImageUser] = useState(userAvatarDefault);
  const [uploadUserImage, setUploadUserImage] = useState(null);
  const [userImageURL, setUserImageURL] = useState(null);
  const [isloading, setisloading] = useState(false);


  useEffect(() => {
    console.log('ssss', userData);
    if (userData) {
      setSkills(userData.skills);
      setFirstName(userData.firstname);
      setLastName(userData.lastname);
      setCampus(userData.campus);
      setLocataion(userData.location);
    }
  }, [userData]);
  useEffect(() => {
    if (uploadUserImage) {
      setisloading(true);
      setUploadUserImage(uploadUserImage);
      handleImageUpload();
      setisloading(false);
    }
  }, [uploadUserImage]);


  useEffect(() => {
    if(auth.currentUser.uid)
      getUserInfo()
  
  }, [auth.currentUser.uid])
  
  const handleChangeUserImage = (e) => {
    try {
      const selectedImage = e.target.files[0];
      console.log('ssssss', selectedImage);
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

  const getUserInfo = async () => {
    if (auth.currentUser.uid) {
      try {
        const res = await axios.get(API_URL + 'user?id=' + auth.currentUser.uid);
        setUserData(res.data.data) ;
      } catch (err) {
        console.log('error', err);
      }
    }
  };

  const handleChangeSkill = (event) => {
    const {
      target: { value },
    } = event;
    setSkills(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      {userData && (
        <div className="userSettings-container">
          <div className="userSettings-backButton">
            <Button
              className="userSettings-backButton-bttn"
              variant="text"
              startIcon={
                <ArrowBackIcon className="userSettings-backButton-icon" />
              }
            >
              Regresar
            </Button>
          </div>
          <div className="userSettings-content">
            <form className="userSettings-form">
              <h1 className="userSettings-myProfileTitle">Mi perfil</h1>
              <p className="userSettings-myProfileT">
                Información general mostrada en el perfil
              </p>
              <div className="userSettings-editUserImage">
                <div className="userSettings-photoContainer">
                  <Box className="imageContainer">
                    <Button
                      aria-label="upload picture"
                      component="label"
                      className="userSettingsPhoto-imageBttn"
                    >
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={handleChangeUserImage}
                      />
                      <img
                        src={imageUser}
                        alt="userIMage"
                        className="userSettingsPhoto-img"
                      />
                    </Button>
                  </Box>
                  <div className="userSettings-changeBttnsContainer">
                    <Button
                      variant="contained"
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      className="userSettingsChangePhoto-bttn"
                    >
                      Cambiar foto
                      <input
                        hidden
                        className="input-icon"
                        accept="image/*"
                        type="file"
                        onChange={handleChangeUserImage}
                      />
                    </Button>

                    <Button
                      variant="outlined"
                      className="userSettingsChangePhoto-bttn"
                      startIcon={<DeleteOutlineOutlinedIcon />}
                      onClick={(e) => setUserImage(userAvatarDefault)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>

              <p className="userSettings-imageP">
                Sube una foto de perfil. La resolución recomendaba es 256 x
                256px
              </p>

              <div className="userSettings-infoContainer">
                <CssTextField
                  className="userSettings-name userSettings-input mb-2"
                  id="userSettings-name"
                  placeholder={userData.firstname}
                  size="small"
                  onChange={(e) => setFirstName(e.target.value)}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                />

                <CssTextField
                  className="userSettings-lastname userSettings-input mb-2"
                  id="userSettings-lastname"
                  placeholder={userData.lastname}
                  size="small"
                  onChange={(e) => setLastName(e.target.value)}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                />
                <CssTextField
                  className="userSettings-lastname userSettings-input"
                  id="userSettings-lastname"
                  placeholder={userData.location}
                  size="small"
                  onChange={(e) => setLastName(e.target.value)}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                />

                <CssAutocomplete
                  className="userSettings-autoComplete"
                  id="userSettings-box"
                  size="small"
                  options={udgCampus}
                  ListboxProps={{
                    sx: {
                      '& li:nth-of-type(even):hover': {
                        backgroundColor: '#4098d3',
                      },
                      '& li:nth-of-type(odd):hover': {
                        backgroundColor: '#4098d3',
                      },
                      color: '#212121',
                    },
                  }}
                  renderInput={(params) => (
                    <CssTextField
                      placeholder="Centro Universitario"
                      size="small"
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      className="userSettings-values"
                      {...params}
                    />
                  )}
                  onChange={(e) => setCampus(e.target.value)}
                />

                <div className="userSettingsSkills-container">
                  <FormControl className="userSettings-formChips">
                    <InputLabel sx={{ color: 'white' }}>
                      Tus habilidades
                    </InputLabel>
                    <CssSelect
                      multiple
                      variant="outlined"
                      value={skills}
                      defaultValue={userData.skills}
                      onChange={handleChangeSkill}
                      input={<OutlinedInput label="Tus habilidades" />}
                      renderValue={(selected) => (
                        <Box
                          className="userSettings-boxChips"
                          sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip
                              className="userSettings-chips"
                              key={value}
                              label={value}
                            />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps_}
                    >
                      {skillsValues.map((skill) => (
                        <MenuItem
                          key={skill}
                          value={skill}
                          style={getStyles(skill, skills, theme)}
                          sx={{
                            ':hover': { backgroundColor: '#4098d3' },
                            ':select': { backgroundColor: '#4098d3' },
                          }}
                        >
                          <Checkbox checked={skills.indexOf(skill) > -1} />
                          <ListItemText primary={skill}></ListItemText>
                        </MenuItem>
                      ))}
                    </CssSelect>
                  </FormControl>
                </div>
              </div>

              <div className="userSettings-actionButtons">
                <Button
                  variant="contained"
                  className="userSettings-actionButtons_save"
                  onClick={async () => {
                    console.log('all data ',userImageURL );
                    if (!userImageURL) setUserImageURL(userData.avatar);
                    if (!firstname) setFirstName(userData.avatar);
                    if (!lastname) setFirstName(userData.lastname);
                    if (!campus) setFirstName(userData.campus);
                    if (!skills) setFirstName(userData.skills);
                    await axios.put(API_URL + 'user', {
                      id: auth.currentUser.uid,
                      data:{
                        avatar: userImageURL,
                        firstname: firstname,
                        lastname: lastname,
                        campus: campus,
                        skills: skills,
                      }
      
                    }).then((res)=> {
                      console.log('res',res);
                      router.push({
                        pathname: '/userProfile',
                        query: { id: auth.currentUser.uid },
                      })
                    });
                  }}
                >
                  Guardar
                </Button>
                <Button
                  variant="outlined"
                  className="userSettings-actionButtons_cancel"
                  onClick={() => {
                    router.push({
                      pathname: '/userProfile',
                      query: { id: auth.currentUser.uid },
                    });
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </form>
            <div className="userSettings-desktopPhrase">
              <div className="userSettings-phraseContainer">
                <h1 className="settings-phraseTitle">
                  Ten confianza en ti mismo!
                </h1>
                <p className="userSettings-phrase">
                  Las fotos con rostro son un tipo de imágenes que tienen mucho
                  poder de atracción. Algunos estudios sobre la psicología de la
                  imagen demuestran que observar una cara que nos mira, estimula
                  un sesgo cognitivo integrado en nuestros cerebros y atrae
                  mucho la atención.
                </p>
              </div>

              <img
                src={userSettingsDesktopImagePhrase}
                alt=""
                className="userSettings-phraseCharacter"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserSettings;
