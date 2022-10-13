import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
function ProjectCard() {
  return (
    <Col xl={3} lg={4} md={6} sm={12} className="my-2 card-container2">
      <div className="card">
        <div className="card-header px-4 pt-4">
          <img
            className="card-project-img"
            src="https://teamleader.fra1.cdn.digitaloceanspaces.com/corporate/production/header/_300x300_crop_center-center_80_none/Blog4_AssignRolesAndResponsibilities_Header.png"
            alt=""
          />
          <h5 className="card-title mb-0">Titulo Proyecto</h5>
          <div className="badge bg-success my-2">Finished</div>
        </div>
        <div className="card-body px-4 pt-2">
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </p>


          <div className="d-flex justify-content-center">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar3.png"
              className="rounded-circle mr-1"
              alt="Avatar"
              width="28"
              height="28"
            />
            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              className="rounded-circle mr-1"
              alt="Avatar"
              width="28"
              height="28"
            />
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              className="rounded-circle mr-1"
              alt="Avatar"
              width="28"
              height="28"
            />
          </div>
        </div>

      </div>
    </Col>
  );
}

export default ProjectCard;
