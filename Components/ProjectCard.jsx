import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
function ProjectCard() {
  return (
    <Col xl={3} lg={4} md={6} sm={12} className="my-2">
      <Card style={{ width: "100%" }} className='mx-6'>
        <Card.Img
          variant="top"
          className="card-image"
          src="https://teamleader.fra1.cdn.digitaloceanspaces.com/corporate/production/header/_300x300_crop_center-center_80_none/Blog4_AssignRolesAndResponsibilities_Header.png"
        />
        <Card.Body>
          <Card.Title>Titulo Projecto</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex -flex-row align-items-center justify-content-center m-2">
            <Button className="btn blue-button mx-2">Aplicar</Button>
            <Button className="gold-button mx-2">Contactar</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
