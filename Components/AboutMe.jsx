import React from 'react';
import Button from '@mui/material/Button';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function AboutMe({ user }) {
  return (
    <div className="aboutMe-container">
      {user.experience && (
        <div className="aboutMe-experience">
          <span className="aboutMe-experience-title title">Experiencia</span>
          <p className="aboutMe-experience-content text"> {user.experience} </p>
        </div>
      )}

      {user.aboutMe && (
        <div className="aboutMe-me">
          <span className="aboutMe-me-title title">Acerca de mi</span>
          <p className="aboutMe-me-content text">{user.aboutMe}</p>
        </div>
      )}
      <Button
        endIcon={<ExpandCircleDownOutlinedIcon className="btn-icon" />}
        className="btn-readMore"
      >
        Leer más
      </Button>
    </div>
  );
}

export default AboutMe;
