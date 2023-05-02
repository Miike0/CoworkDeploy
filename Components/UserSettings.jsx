import React, { useState } from 'react';
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
import { userAvatarDefault, udgCampus , skillsValues , userSettingsDesktopImagePhrase, API_URL} from '../Utils/Constants';
import axios from 'axios';
import { auth } from '../Utils/firebase';

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


function UserSettings() {
    const [userImage, setUserImage] = useState(userAvatarDefault);
    const [uploadProjectImage, setUploadProjectImage] = useState(null);
    const [skills, setSkills] = useState([]);
    const theme = useTheme();


    const handleChangeUserImage = (e) => {
        try {
          setUserImage(URL.createObjectURL(e.target.files[0]));
          setUploadProjectImage(e.target.files[0].name);
  
        } catch (error) {
          setUserImage(userImage);
        }
        
    }
    const handleChangeSkill = (event) => {
        const {
          target: { value },
        } = event;
        setSkills (
          typeof value === 'string' ? value.split(',') : value,
        );
    };



  return (
    <>
        <NavBar></NavBar>
        <div className="userSettings-container">
            <div className="userSettings-backButton">
                <Button className='userSettings-backButton-bttn' variant="text" startIcon={<ArrowBackIcon className='userSettings-backButton-icon'/>}>
                    Regresar
                </Button>
            </div>
            <div className="userSettings-content">
                <form className="userSettings-form">
                    <h1 className="userSettings-myProfileTitle">Mi perfil</h1>
                    <p className="userSettings-myProfileT">Información general mostrada en el perfil</p>
                    <div className="userSettings-editUserImage">

                        <div className="userSettings-photoContainer">
                            <Box className='imageContainer'>
                                <Button aria-label="upload picture" component="label" className='userSettingsPhoto-imageBttn'>
                                    <input hidden accept="image/*" type="file" onChange={handleChangeUserImage}/>
                                    <img src={userImage} alt="userIMage" className='userSettingsPhoto-img'/>
                                </Button>
                                
                            </Box>
                            <div className="userSettings-changeBttnsContainer">
                                    <Button variant='contained' color="primary" aria-label="upload picture" component="label" className='userSettingsChangePhoto-bttn'>
                                        Cambiar foto
                                        <input hidden className='input-icon' accept="image/*" type="file" onChange={handleChangeUserImage}/>
                                    </Button>

                                    <Button 
                                        variant='outlined' 
                                        className='userSettingsChangePhoto-bttn' 
                                        startIcon={<DeleteOutlineOutlinedIcon />} 
                                        onClick={e => setUserImage(userAvatarDefault)}>

                                        Eliminar
                                    </Button>
                            </div>
                        </div>

                    </div>

                    <p className="userSettings-imageP">Sube una foto de perfil. La resolución recomendaba es 256 x 256px</p>

                    <div className="userSettings-infoContainer">

                        <CssTextField 
                            className='userSettings-name userSettings-input'
                            id='userSettings-name'
                            label="Nombre(s)"
                            size='small'
                            InputLabelProps={{
                                style: { color: 'white' },
                            }}
                        />
                        
                        <CssTextField 
                            className='userSettings-lastname userSettings-input'
                            id='userSettings-lastname'
                            label="Apellido(s)"
                            size='small'
                            InputLabelProps={{
                                style: { color: 'white' },
                            }}
                        />
                        
                        <CssTextField 
                            className='userSettings-email userSettings-input'
                            id='userSettings-email'
                            label="Correo"
                            type='email'
                            size='small'
                            InputLabelProps={{
                                style: { color: 'white' },
                            }}
                        />
                        
                        
                        <CssAutocomplete
                            className='userSettings-autoComplete'
                            id='userSettings-box'
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
                                label="Centro Universitario"
                                size='small'
                                InputLabelProps={{
                                style: { color: 'white' },
                                }}
                                className='userSettings-values' 
                                {...params} 
                                
                            />
                            }
                            //onChange={(e) => setUniversityCenter(e.target.innerText)}
                        />

                        <div className="userSettingsSkills-container">
                            <FormControl className='userSettings-formChips'>
                                <InputLabel sx={{color: 'white'}}>Tus habilidades</InputLabel>
                                    <CssSelect
                                        multiple
                                        variant='outlined'
                                        value={skills}
                                        onChange={handleChangeSkill}
                                        input={<OutlinedInput label="Tus habilidades"/>}
                                        renderValue={(selected) => (
                                            <Box className='userSettings-boxChips' sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                                {selected.map((value) => (
                                                <Chip className='userSettings-chips' key={value} label={value} />
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
                        </div>

                    </div>

                    <div className="userSettings-actionButtons">
                        <Button variant='contained' className='userSettings-actionButtons_save' >Guardar</Button>
                        <Button variant='outlined' className='userSettings-actionButtons_cancel'>Cancelar</Button>
                    </div>

                </form>
                <div className="userSettings-desktopPhrase">
                    <div className="userSettings-phraseContainer">
                        <h1 className="settings-phraseTitle">Ten confianza en ti mismo!</h1>
                        <p className="userSettings-phrase">
                            Las fotos con rostro son un tipo de imágenes que tienen mucho poder de atracción. Algunos estudios sobre la psicología de la imagen demuestran que observar una cara que nos mira, estimula un sesgo cognitivo integrado en nuestros cerebros y atrae mucho la atención.
                        </p>
                    </div>

                    <img src={userSettingsDesktopImagePhrase} alt="" className="userSettings-phraseCharacter" />
                </div>
            </div>
        </div>
    </>
  )
}

export default UserSettings;

