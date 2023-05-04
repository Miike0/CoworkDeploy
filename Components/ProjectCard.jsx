import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from '../Utils/Constants.js';

function ProjectCard(props) {
  const { project, userData } = props;
  //console.log(userData);
  const router = useRouter();

  const [membersFetched, setMembersFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMembers = async () => {
      const data = project.data.members.map(async (member) => {
        const res = await axios.get(API_URL + 'user?id=' + member);

        return { id: member, data: res.data.data };
      });
      const fetchedMembers = await Promise.all(data);

      setMembersFetched(fetchedMembers);
      setIsLoading(false);
    };

    if (project?.data?.members) {
      getMembers();
    }
  }, []);

  return (
    <Col xl={4} lg={4} md={6} sm={12} className="my-2 card-container2">
      {project && (
        <a
          onClick={() => {
            sessionStorage.setItem('projectID', project.id);
            sessionStorage.setItem('userID', userData.uid);
            router.push(
              {
                pathname: '/ProjectDetails',
                query: { id: project.id, user: userData.uid },
              },
              '/ProjectDetails',
            );
          }}
          variant="contained"
          color="success"
        >
          <div className="card">
            <div className="card-header px-4 pt-4">
              <img className="card-project-img" src={project.data?.image} alt="" />
              <h5 className="card-title mb-0">{project.data?.name}</h5>
              <div className="badge bg-success my-2">{project.data?.status}</div>
            </div>
            <div className="card-body px-4 pt-2">
            <div className="card-body_description px-4 pt-2">
                <p>{project.data.description}</p>
            </div>

              <div className="d-flex justify-content-center">
                {!isLoading &&
                  project.data.members?.map((member, project) => {
                    return (
                      <img
                        key={`${project}_${member}`}
                        src={
                          membersFetched.find((_member) => _member.id === member)
                            ?.data?.avatar
                        }
                        className="rounded-circle mr-1"
                        alt="Avatar"
                        width="28"
                        height="28"
                      />
                    );
                  })}
              </div>
            </div>
            <div></div>
          </div>
        </a>
      )}
    </Col>
  );
}

export default ProjectCard;
