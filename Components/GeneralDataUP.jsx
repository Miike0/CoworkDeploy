import React from 'react';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import Stack from '@mui/material/Stack';

function GeneralDataUP({ user }) {
  return (
    <div className="generalData-container">
      {user.skills?.length > 0 && (
        <>
          <span className="generalData-skills title">Habilidades</span>
          <div className="generalData-skills-chips">
            <Stack direction="row" spacing={1} className="chips-container">
              {user.skills.map((skill) => {
                return(
                  <Chip label={skill} variant="outlined" className="chip" />
                )
              })}
            </Stack>

            {/* <IconButton className="generalData-skills-addButton" size="large">
              <AddCircleSharpIcon
                fontSize="large"
                className="generalData-skills-addButton-icon"
              />
            </IconButton> */}
          </div>
        </>
      )}

      {user.location && (
        <>
          <span className="location-label title">Ubicación</span>
          <p className="location-data data">{user.location}</p>
        </>
      )}

      {user.email && (
        <>
          <span className="email-label title">Correo</span>
          <p className="email-data data">{user.email} </p>
        </>
      )}

      {user.college && (
        <>
          <span className="cu-label title">Centro Universitario</span>
          <p className="cu-data data">{user.college}</p>
        </>
      )}
    </div>
  );
}

export default GeneralDataUP;
