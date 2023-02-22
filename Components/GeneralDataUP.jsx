import React from "react";
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import Stack from '@mui/material/Stack';

function GeneralDataUP() {
    return (
        <div className="generalData-container">
            <span className="generalData-skills title">Habilidades</span>
            <div className="generalData-skills-chips">
                <Stack direction="row" spacing={1} className="chips-container">
                    <Chip size="large" label="UX Design" variant="outlined" className="chip"/>
                    <Chip label="Python" variant="outlined" className="chip"/>
                    <Chip label="Front-end" variant="outlined" className="chip"/>
                    <Chip label="Back-end" variant="outlined" className="chip"/>
                    <Chip label="JavaScript" variant="outlined" className="chip"/>
                    <Chip label="C#" variant="outlined" className="chip"/>
                </Stack>
                
                <IconButton className="generalData-skills-addButton" size="large">
                    <AddCircleSharpIcon fontSize="large" className="generalData-skills-addButton-icon"/>
                </IconButton>
            </div>

            <span className="location-label title">Ubicación</span>
            <p className="location-data data">Guadalajara, Jalisco</p>
            
            <span className="email-label title">Correo</span>
            <p className="email-data data">JohnDoe@email.com</p>
            
            <span className="cu-label title">Centro Universitario</span>
            <p className="cu-data data">Centro Universitario de Ciencias Exactas e Ingenierías</p>


        </div>
    );
}

export default GeneralDataUP;