import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import { withRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from '../Utils/Constants';
import ProjectDescription from '../Components/ProjectDescription';
import ProjectTeam from '../Components/ProjectTeam';
import { Button, Modal } from 'react-bootstrap';

function ProjectDetails(props) {
  const [project, setProject] = useState();
  const [projectID, setProjectID] = useState();
  const [user, setUser] = useState();
  const [userID, setUserID] = useState();
  const [loading, isLoading] = useState(true);
  const getProject = async (id) => {
    await axios
      .get(API_URL + 'project', { params: { id } })
      .then((res) => setProject(res.data.data));
  };
  const getUser = async (id) => {
    await axios
      .get(API_URL + 'user', { params: { id } })
      .then((res) => setUser(res.data.data));
  };
  const [sendNotificationModalShown, setSendNotificationModalShown] =
    useState(false);

  useEffect(() => {
    let projectKey;
    let userKey;
    if (!props.router.query.id)
      projectKey = sessionStorage.getItem('projectID');
    else projectKey = props.router.query.id;
    if (!props.router.query.user) userKey = sessionStorage.getItem('userID');
    else userKey = props.router.query.user;
    getProject(projectKey);
    getUser(userKey);
    setUserID(userKey);
    setProjectID(projectKey);
  }, [loading]);

  useEffect(() => {
    console.log({ project, user });
    if (project && user && userID && projectID) isLoading(false);
  }, [project, user, userID, projectID]);

  const sendNotification = async () => {
    await axios.post(API_URL + 'project/join', {
      requester: userID,
      project: projectID,
    });

    setSendNotificationModalShown(false);
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="d-flex flex-column">
      <NavBar />
      {sendNotificationModalShown && (
        <div
          className="modal show modalJoinProject"
        >
          <Modal
            className='modalJoinProject' 
            show={sendNotificationModalShown} 
            onHide={() => setSendNotificationModalShown(false)}
            >
            <Modal.Header closeButton>
              <Modal.Title>Solicitar acceso al proyecto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                ¿Deseas unirte a este proyecto? Se notificará al dueño por medio
                de un email.
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setSendNotificationModalShown(false);
                }}
              >
                Cancelar
              </Button>
              <Button variant="primary" onClick={sendNotification}>
                Sí, solicitar acceso
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      <div className="projectBanner d-flex flex-column">
        <img className="projectDetailsimg" src={project.image} alt="" />
        <h2 className="projectTitle">{project.name}</h2>
      </div>
      <div className="descriptionContainer d-flex ">
        <ProjectDescription
          description={project.description}
          additionalInfo={project.additionalInfo}
        />
        <ProjectTeam
          members={project.members}
          skills={project.skills}
          setShowJoinRequestModal={setSendNotificationModalShown}
        />
      </div>
    </div>
  );
}
export default withRouter(ProjectDetails);
