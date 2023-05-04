import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete, Chip } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { coWorkLogo, skillsValues, udgCampus, userAvatarDefault, API_URL} from '../Utils/Constants';
import axios from 'axios';
import { auth, storage } from '../Utils/firebase';
import { useRouter } from 'next/router';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import NoticeOfPrivacyModal from './NoticeOfPrivacyModal';


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
  input : {
    color: 'white',
  },
  "&.Mui-focused .MuiInputLabel-outlined": {
    color: "white"
  }
});
const CssAutocomplete = styled(Autocomplete)({
  color: "white",
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
  input : {
    color: 'white',
  },
  "&.Mui-focused .MuiInputLabel-outlined": {
    color: "white"
  },
  autoCompleteLabel : {
    color: 'white'
  },
  '& label': {
    color: 'white',
  },
  '.MuiSvgIcon-root ': {
    fill: "white !important",
  }
});
const CssSelect= styled(Select)({
  '& label.Mui-focused': {
    color: 'white',
  },
  color: "white",
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
    fill: "white !important",
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

function SkillForm() {

    const [universityCenter, setUniversityCenter] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [previousExpertise, setPreviousExpertise] = useState('');
    const [about, setAbout] = useState('');
    const [imageUser, setImageUser] = useState(userAvatarDefault);
    const [uploadUserImage, setUploadUserImage] = useState(null);
    const theme = useTheme();
    const [skills, setSkills] = useState([]);
    const [userImageURL, setUserImageURL] = useState(null);
    const [isloading, setisloading] = useState(false);
    const router = useRouter()

    const handleChangeSkill = (event) => {
      const {
        target: { value },
      } = event;
      setSkills (
        typeof value === 'string' ? value.split(',') : value,
      );
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
    }

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
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const userInfo = {
        id : auth.currentUser.uid,
        avatar : userImageURL,
        firstname : name,
        lastname : lastName,
        college : universityCenter,
        location : location,
        skills : skills,
        experience : previousExpertise,
        aboutMe : about,
        description : description,
        username: `${name} ${lastName}`
      };
      axios.post(API_URL + 'skills', userInfo);
      router.push('/')
    }
    return (
      <form className='skillForm-container' onSubmit={handleSubmit}>
          
          <div className='skillForm-leftSide'>
            <div className="skillForm-labels">
              <h1 className="skillForm-aboutYou">Acerca de ti</h1>
              <h2 className="skillForm-tellUs">Cuentanos un poco sobre ti</h2>
            </div>
            
            <div className="skillForm-userPhoto">
              <Button aria-label="upload picture" component="label" className='userPhoto-imageBttn'>
                <input hidden accept="image/*" type="file" onChange={handleChangeImageUser}/>
                <img src={imageUser} alt="userIMage" className='userPhoto-img'/>
              </Button>
              <IconButton color="primary" aria-label="upload picture" component="label" className='userPhoto-bttn'>
                <input hidden accept="image/*" type="file" onChange={handleChangeImageUser}/>
                <AddAPhotoIcon className='userPhoto-icon'/>
              </IconButton>
            </div>
          </div>
          
          <div className='skillForm-rightSide'>
            <div className="skillForm-logo">
              <h1 className='skillForm-welcome'>Bienvenido</h1>
              <img className="skillForm-img" src={coWorkLogo} alt="coWork-logo" />
            </div>
            <div className="skillForm-form">
              <CssAutocomplete
                className='skillForm-autoComplete'
                id='skillForm-box'
                size='small'
                options={udgCampus}
                ListboxProps = {{
                  sx: {
                    "& li:nth-of-type(even):hover": { backgroundColor: "#4098d3" },
                    "& li:nth-of-type(odd):hover": { backgroundColor: "#4098d3" },
                    color : '#212121',
                  }
                }}
                renderInput={(params) => 
                  <CssTextField 
                    required
                    label="Centro Universitario"
                    size='small'
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                      className='skillForm-values' 
                      {...params} 
                    
                  />
                }
                onChange={(e) => setUniversityCenter(e.target.innerText)}
              />
              <Box className='skillForm-names'>
                <CssTextField 
                  className='skillForm-name input names'
                  id='skillForm-name'
                  label="Nombre(s)"
                  size='small'
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  onChange={e => setName(e.target.value)}
                />
                <CssTextField 
                  className='skillForm-apellidos input names'
                  id='skillForm-apellidos'
                  label="Apellido(s)"
                  size='small'
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  onChange={e => setLastname(e.target.value)}
                />
              </Box>
              <CssTextField
                className='skillForm-location  input input-large'
                id='skillForm-location'
                label='Ubicación'
                size='small'
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                onChange={e => setLocation(e.target.value)}
              />
              <CssTextField
                className='skillForm-descripcion input input-large'
                id='skillForm-description input input-large'
                label='Descripción del perfil'
                size='small'
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                inputProps={{
                  style: { color: 'white' },
                  maxLength: 150,
                }}
                placeholder='Máximo 150 caracteres'
                multiline
                rows={2}
                onChange={e => setDescription(e.target.value)}
              />

              <FormControl className='skillForm-formChips'>
                <InputLabel sx={{color: 'white'}}>Skills</InputLabel>
                <CssSelect
                  multiple
                  variant='outlined'
                  value={skills}
                  onChange={handleChangeSkill}
                  input={<OutlinedInput label="Skills"/>}
                  renderValue={(selected) => (
                      <Box className='skillForm-boxChips' sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                        {selected.map((value) => (
                          <Chip className='skillForm-chips' key={value} label={value} />
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
                        ":hover": { backgroundColor: "#4098d3" },
                        ":select": { backgroundColor: "#4098d3" },
                      }}
                    >
                      <Checkbox checked={skills.indexOf(skill) > -1}/>
                      <ListItemText primary={skill}></ListItemText>
                    </MenuItem>
                  ))}

                </CssSelect>
              </FormControl>

              <CssTextField
                className='skillForm-experience input input-large'
                id='skillForm-experience input input-large'
                label='Experiencia previa'
                size='small'
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                inputProps={{
                  style: { color: 'white' },
                }}
                multiline
                rows={4}
                onChange={e => setPreviousExpertise(e.target.value)}
              />
              <CssTextField
                className='skillForm-aboutU input input-large'
                id='skillForm-aboutU input input-large'
                label='Cuentanos acerca de ti'
                size='small'
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                inputProps={{
                  style: { color: 'white' },
                }}
                multiline
                rows={4}
                onChange={e => setAbout(e.target.value)}

              />
              <Button className='skillForm-beggins' variant="contained" type='submit'>Comenzar</Button>
              <NoticeOfPrivacyModal/>
            </div>
          </div>
      </form>
    );
}

export default SkillForm;