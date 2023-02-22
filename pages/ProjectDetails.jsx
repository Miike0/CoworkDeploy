import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import { withRouter } from 'next/router';
import axios from "axios";
import { API_URL } from '../Utils/Constants';

function ProjectDetails(props) {
  const [project, setProject] = useState();

  const getProject = async () => {
    await axios.get(API_URL + "project",props.router.query.name).then((res) => setProject(res.data.data));
    console.log(project);
  };

  useEffect(() => {
    getProject()

  }, []);
  return (

    <div>
      <div className='projectBanner d-flex flex-row'>
      <img className="projectDetailsimg" src={props.router.query.image} alt="" />

        <h1 className='card-title'>{props.router.query.name}</h1>
     </div>
    </div>
  )
}
export default withRouter(ProjectDetails);