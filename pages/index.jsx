import React from "react";
import NavBar from "../Components/NavBar";
import ChatBar from "../Components/ChatBar";
import ProjectBar from "../Components/ProjectBar";
import SeachFilters from "../Components/SeachFilters";
import ProjectCard from "../Components/ProjectCard";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
export default function index() {
  return (
    <div>
      <div className="d-flex flex-row">
        <ChatBar />

        <NavBar />
        <ProjectBar />
        <div className="d-flex flex-column justify-content-center   mx-auto">
          <SeachFilters />
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
