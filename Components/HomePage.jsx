import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import SeachFilters from "../Components/SeachFilters";
import ProjectCard from "../Components/ProjectCard";
import { Row } from "react-bootstrap";
import { API_URL } from "../Utils/Constants.js";



export default function HomePage({userData}) {
  console.log('Data', userData);
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = async () => {
    await axios.get(API_URL + "projects").then((res) => setAllProjects(res.data.data));
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    setIsLoading(false);
    setProjects(allProjects);
  }, [allProjects]);

  useEffect(() => {
    setIsLoading(true);
    setProjects(allProjects.map((project) => project).filter((project) => project.data.name.toLowerCase().includes(filters.toLowerCase())));
    setIsLoading(false);
  }, [filters]);

  const searchHandler = (e) => {
    setFilters(e.target.value);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <NavBar username={userData.username} avatar={userData.avatar}/>
      <div className="d-flex flex-column justify-content-center mx-auto mt-4">
        <SeachFilters filters={filters} onSearch={searchHandler} />
        <div className="card-container ">
          <Row>{projects.length > 0 && projects.map((project) => <ProjectCard key={project.id} project={project} />)}</Row>
        </div>
      </div>
    </div>
  );
}
