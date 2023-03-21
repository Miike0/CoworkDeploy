import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { API_URL } from '../Utils/Constants';

function MyProjectsUP({ user, userID }) {
  const layouts = {
    1: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    2: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    3: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await axios.get(API_URL + 'projects');

      const userProjects = res.data.data.map((project) => {
        if (user.projects.includes(project.id)) {
          return project;
        }
      });
      const filteredUserProjects = userProjects.filter((project) => project);

      setProjects(filteredUserProjects);
    };

    setIsLoading(true);
    getAllProjects();
  }, []);

  useEffect(() => {
    if (projects) {
      setIsLoading(false);
    }
  }, [projects]);

  return isLoading ? (
    <></>
  ) : (
    <div className="myProjects-container">
      <span className="title">Proyectos</span>
      <Carousel variant="dark" className="myProjects-carousel">
        {projects.map((project, index) => {
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src={layouts[(index % layouts.length) + 1]}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>{project.name} </h5>
              <p>{project.description} </p>
            </Carousel.Caption>
          </Carousel.Item>;
        })}
      </Carousel>
    </div>
  );
}

export default MyProjectsUP;
