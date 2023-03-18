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



const userAvatarDefault = 'https://firebasestorage.googleapis.com/v0/b/coworkv2.appspot.com/o/StockImages%2FuserAvatar.png?alt=media&token=a2ab4c9b-46e8-4e07-bca2-099d1d007c60';
const coWorkLogo = 'https://firebasestorage.googleapis.com/v0/b/coworkv2.appspot.com/o/StockImages%2FCoWork-Logo.png?alt=media&token=e432161d-e941-4483-9084-78d3a4b408f3';

const udgCampus = [
  {label : 'Centro Universitario de Arte, Arquitectura y Diseño', acronimous: 'CUAAD'},
  {label : 'Centro Universitario de Ciencias Biológicas y Agropecuarias', acronimous: 'CUCBA'},
  {label : 'Centro Universitario de Ciencias Económicas Administrativas', acronimous: 'CUCEA'},
  {label : 'Centro Universitario de Ciencias Exactas e Ingenierías', acronimous: 'CUCEI'},
  {label : 'Centro Universitario de Ciencias de la Salud', acronimous: 'CUCS'},
  {label : 'Centro Universitario de Ciencias Sociales y Humanidades', acronimous: 'CUCSH'},
  {label : 'Centro Universitario de los Altos', acronimous: 'CUALTOS'},
  {label : 'Centro Universitario de la Costa', acronimous: 'CUC'},
  {label : 'Centro Universitario de la Ciénega', acronimous: 'CUCIENEGA'},
  {label : 'Centro Universitario de los Lagos', acronimous: 'CULAGOS'},
  {label : 'Centro Universitario de la Costa Sur', acronimous: 'CUCSUR'},
  {label : 'Centro Universitario del Norte', acronimous: 'CUNORTE'},
  {label : 'Centro Universitario del Sur', acronimous: 'CUSUR'},
  {label : 'Centro Universitario de Los Valles', acronimous: 'CUVALLES'},
];

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

const skillsValues = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'PHP',
  'C/C++',
  'Ruby',
  'GO',
  'SQL',
  'Kotlin',
  'Swift',
  'Rust',
  'Solidity',
  'Matlab',
  'Bash',
  'Front-end',
  'Back-end',
  'UI/UX',
];

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

    const [imageUser, setImageUser] = useState(userAvatarDefault);
    const [uploadUserImage, setUploadUserImage] = useState(null);
    
    const theme = useTheme();
    const [skills, setSkills] = useState([]);

    const handleChangeImageUser = (e) => {
      try {
        setImageUser(URL.createObjectURL(e.target.files[0]));
        setUploadUserImage(e.target.files[0].name);

      } catch (error) {
        setImageUser(imageUser);
      }
      
    }

    const handleChangeSkill = (event) => {
      const {
        target: { value },
      } = event;
      setSkills (
        typeof value === 'string' ? value.split(',') : value,
      );
      console.log(skills)
    };

    return (
      <div className='skillForm-container'>
          
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
                    label="Centro Universitario"
                    size='small'
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                      className='skillForm-values' 
                      {...params} 
                    
                  />
                }
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
                />
                <CssTextField 
                  className='skillForm-apellidos input names'
                  id='skillForm-apellidos'
                  label="Apellido(s)"
                  size='small'
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
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
                }}
                multiline
                rows={2}
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
              />
              <Button className='skillForm-beggins' variant="contained">Comenzar</Button>
            </div>
          </div>
      </div>
    );
}

export default SkillForm;