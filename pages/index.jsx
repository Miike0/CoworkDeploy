import React from "react";
import NavBar from "../Components/NavBar";
import ChatBar from "../Components/ChatBar";
import ProjectBar from "../Components/ProjectBar";
import SeachFilters from "../Components/SeachFilters";
import ProjectCard from "../Components/ProjectCard";
import DashboardMobileBar from "../Components/DashboardMobileBar";
import { Row, Col } from "react-bootstrap";
export default function index() {
  return (
    <div>
      <div className="d-flex flex-row">
        <ChatBar />

        <NavBar />
        <ProjectBar />
        <div className="d-flex flex-column justify-content-center   mx-auto mt-4">
          <SeachFilters />
          <DashboardMobileBar/>
          <div className="card-container pe-4">
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
    </div>
  );
}
