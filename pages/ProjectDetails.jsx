import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import { withRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from '../Utils/Constants';
import ProjectDescription from '../Components/ProjectDescription';
import ProjectTeam from '../Components/ProjectTeam';

function ProjectDetails(props) {
  const [project, setProject] = useState();
  const [loading, isLoading] = useState(true);
  const getProject = async (id) => {
    await axios
      .get(API_URL + 'project', { params: { id: id } })
      .then((res) => setProject(res.data.data));
  };

  useEffect(() => {
    let key;
    if (!props.router.query.id) key = sessionStorage.getItem('projectID');
    else key = props.router.query.id;
    getProject(key);
  }, [loading]);

  useEffect(() => {
    if (project) isLoading(false);
  }, [project]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="d-flex flex-column">
      <NavBar />
      <div className="projectBanner d-flex flex-column">
        <img className="projectDetailsimg" src={project.image} alt="" />
        <h2 className="projectTitle">{project.name}</h2>
      </div>
      <div className="descriptionContainer d-flex ">
        <ProjectDescription
          description={project.description}
          additionalInfo={project.additionalInfo}
        />
        <ProjectTeam members={project.members} skills={project.skills} />
      </div>
    </div>
  );
}
export default withRouter(ProjectDetails);
