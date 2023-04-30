import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import { Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { skillsValues, API_URL, defaultProjectImage } from '../Utils/Constants';

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


function EditProject(){
    const [open, setOpen] = useState(false);
    const [projectImage, setProjectImage] = useState(defaultProjectImage);
    const [uploadProjectImage, setUploadProjectImage] = useState(null);
    const theme = useTheme();

    const [name, setName] = useState('');
    const [projectStatus, setProjectStatus] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectMoreInfo, setProjectMoreInfo] = useState('');
    const [skills, setSkills] = useState([]);

    const handleChangeProjectImage = (e) => {
      try {
        setProjectImage(URL.createObjectURL(e.target.files[0]));
        setUploadProjectImage(e.target.files[0].name);

      } catch (error) {
        setProjectImage(projectImage);
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

    const handleSubmit = (event) => {
      event.preventDefault();
      const projectEditInfo = {
        projectImage : uploadProjectImage,
        skills : skills,
        projectName : name,
        projectStatus : projectStatus,
        projectDescription : projectDescription,
        projectMoreInfo : projectMoreInfo,
      };
      console.log(projectEditInfo)
      //axios.post(API_URL + userInfo.userInfo, userInfo);
    }

  return (
    <div>
        <IconButton onClick={() => setOpen(true)}> <EditIcon  className='editProject-icon' /> </IconButton>
        <Modal
            open={open}
            onClose={() => setOpen(false)}

        >
            <Box className='editProject-box'>
              <form className='editProject-container' onSubmit={handleSubmit}>
                <div className="editProjectName-container">
                  <div className="projectPhoto">
                    <Box className='imageContainer'>
                      <Button aria-label="upload picture" component="label" className='projectPhoto-imageBttn'>
                        <input hidden accept="image/*" type="file" onChange={handleChangeProjectImage}/>
                        <img src={projectImage} alt="userIMage" className='projectPhoto-img'/>
                      </Button>
                      <IconButton color="primary" aria-label="upload picture" component="label" className='projectPhoto-bttn'>
                        <input hidden className='input-icon' accept="image/*" type="file" onChange={handleChangeProjectImage}/>
                        <AddAPhotoIcon className='projectPhoto-icon'/>
                      </IconButton>
                    </Box>

                  </div>
                  <CssTextField 
                    className='projectName'
                    id='skillForm-name'
                    label="Nombre del proyecto"
                    size='small'
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    onChange={e => setName(e.target.value)}
                  />
                    
                </div>
                
                <div className="editProjectStatus-container">
                  <FormControl className='projectStatus-container'>
                      <FormLabel className='projectStatus-label' id="projectStatus-id">Estatus del proyecto</FormLabel>
                      <RadioGroup
                        row
                        name="projectStatus-options"
                        className='projectStatus-optionsContainer'
                        onChange={e => setProjectStatus(e.target.value)}
                      >
                        <FormControlLabel  className='projectStatus-lookingFor statusOption' value="Reclutando" control={<Radio sx={{'& .MuiSvgIcon-root' : { fontSize : 20 }, color: '#4098d3'}} />} label="Reclutando" />
                        <FormControlLabel className='projectStatus-inProgress statusOption' value="En progreso" control={<Radio sx={{'& .MuiSvgIcon-root' : { fontSize : 20 }, color: '#4098d3'}} />} label="En progreso" />
                        <FormControlLabel className='projectStatus-finished statusOption' value="Finalizado" control={<Radio sx={{'& .MuiSvgIcon-root' : { fontSize : 20 }, color: '#4098d3'}} />} label="Finalizado" />
                      </RadioGroup>
                  </FormControl>
                </div>
                
                <div className="aboutEditProject-container">
                  <CssTextField
                    className='editProjectDescription editInputLarge'
                    id='editProjectDescription editInputLarge'
                    label='Descripción'
                    size='small'
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    inputProps={{
                      style: { color: 'white' },
                    }}
                    multiline
                    rows={3}
                    onChange={e => setProjectDescription(e.target.value)}
                  />
                  <CssTextField
                    className='aditionalInformationEdit editInputLarge'
                    id='aditionalInformationEdit editInputLarge'
                    label='Información adicional'
                    size='small'
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    inputProps={{
                      style: { color: 'white' },
                    }}
                    multiline
                    rows={3}
                    onChange={e => setProjectMoreInfo(e.target.value)}
                  />
                </div>
              
                <div className="editProjectSkillsRequired-container">
                  <FormControl className='editProject-formChips'>
                    <InputLabel sx={{color: 'white'}}>Habilidades requeridas</InputLabel>
                    <CssSelect
                      multiple
                      variant='outlined'
                      value={skills}
                      onChange={handleChangeSkill}
                      input={<OutlinedInput label="Habilidades requeridas"/>}
                      renderValue={(selected) => (
                          <Box className='editProjectForm-boxChips' sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                              <Chip className='editProject-chips' key={value} label={value} />
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

                <div className="editProject-acept-reject">
                  <Button variant='contained' type='submit' >Aceptar</Button>
                  <Button variant='outlined' onClick={() => setOpen(false)}>Cancelar</Button>
                </div>
              </form>
            </Box>
        </Modal>

    </div>
  );
}

export default EditProject;