import React from "react";
import { Col } from "react-bootstrap";
function ProjectCard(props) {
  const { project } = props;
  return (
    <Col xl={3} lg={4} md={6} sm={12} className="my-2 card-container2">
      <div className="card">
        <div className="card-header px-4 pt-4">
          <img className="card-project-img" src={project.data.image} alt="" />
          <h5 className="card-title mb-0">{project.data.name}</h5>
          <div className="badge bg-success my-2">{project.data.status}</div>
        </div>
        <div className="card-body px-4 pt-2">
          <p>{project.data.description}</p>

          <div className="d-flex justify-content-center">
            {project.data.members?.map((member, project) => {
              return <img key={`${project}_${member}`} src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Avatar" width="28" height="28" />;
            })}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
