import React from "react";
import Button from '@mui/material/Button';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function AboutMe () {
    return (
        <div className="aboutMe-container">
            <div className="aboutMe-experience">
                <span className="aboutMe-experience-title title">Experiencia</span>
                <p className="aboutMe-experience-content text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, ipsa id! Alias neque optio laboriosam? Expedita esse repudiandae totam ratione nemo delectus, quisquam minima a. Aliquid quis necessitatibus vitae voluptas.</p>
            </div>
            <div className="aboutMe-me">
                <span className="aboutMe-me-title title">Acerca de mi</span>
                <p className="aboutMe-me-content text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, ipsa id! Alias neque optio laboriosam? Expedita esse repudiandae totam ratione nemo delectus, quisquam minima a. Aliquid quis necessitatibus vitae voluptas.</p>
            </div>
            <Button endIcon={<ExpandCircleDownOutlinedIcon className="btn-icon"/>} className="btn-readMore" >
                Leer mas
            </Button>
        </div>
    );
}

export default AboutMe;