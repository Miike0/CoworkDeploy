import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Form from "react-bootstrap/Form";
import ProjectListComponent from "./ProjectListComponent";
export default function ProjectBar() {
  return (
    /* parte de arriba de la sidebar */

    <div className="position-relative">
      <div className="projectBar-container">
        <div className="d-flex flex-row justify-content-center mt-4 align-items-center">
          <h5 className=" me-4">Proyectos</h5>
          <AddBoxIcon className="icon" sx={{ fontSize: 30 }} />
        </div>
        {/* searchbar de arriba de la sidebar */}
        <Form className="d-flex flex-column w-10 ps-2 pe-2 mt-3 mb-4 ">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-lg-2 me-md-0 searchbar"
            aria-label="Search"
          />
        </Form>
        {/* lista de proyectos recientes */}
        <div className="d-flex flex-column  h-100 overflow-auto">
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
          <ProjectListComponent />
        </div>
      </div>
    </div>
  );
}
