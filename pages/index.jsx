import React from "react";
import NavBar from "../Components/NavBar";
import ProjectBar from "../Components/ProjectBar";
import SeachFilters from "../Components/SeachFilters";
import ProjectCard from "../Components/ProjectCard";
import DashboardMobileBar from "../Components/DashboardMobileBar";
import { Row, Col } from "react-bootstrap";
export default function index() {
  return (
    <div>
      <NavBar />
      <div className="d-flex flex-column justify-content-center mx-auto mt-4">
        <SeachFilters />
        <div className="card-container ">
          <Row>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Row>
        </div>  
      </div>
    </div>
  );
}
