import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import SeachFilters from '../Components/SeachFilters';
import ProjectCard from '../Components/ProjectCard';
import { Row } from 'react-bootstrap';
import { API_URL } from '../Utils/Constants.js';

export default function HomePage({ userData }) {
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [sortedProjectsList, setSortedProjectsList] = useState([]);
  const [sortedProjects, setSortedProjects] = useState([]);
  const [filters, setFilters] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      await axios.get(API_URL + 'projects').then((res) => {
        setAllProjects([...res.data.data]);
      });
    };
    const getRecommended = async () => {
      await axios
        .get(API_URL + 'recommendation/v2?id=' + userData.uid)
        .then((res) => {
          setSortedProjectsList(res.data.sortedData);
        });
    };
    getProjects();
    getRecommended();
  }, []);

  useEffect(() => {
    setIsLoading(false);

    setProjects(allProjects);
  }, [allProjects]);

  useEffect(() => {
    const sortProjects = () => {
      const sortedArray = sortedProjectsList.map((id) => {
        return projects.filter((project) => id === project.id);
      });

      setSortedProjects(sortedArray);
    };
    if (projects && sortedProjectsList) {
      sortProjects();
    }
  }, [projects, sortedProjectsList]);

  useEffect(() => {
    setIsLoading(true);
    setProjects(
      allProjects
        .map((project) => project)
        .filter((project) =>
          project.data.name.toLowerCase().includes(filters.toLowerCase()),
        ),
    );
    setIsLoading(false);
  }, [filters]);

  const searchHandler = (e) => {
    setFilters(e.target.value);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <NavBar user={userData} />
      <div className="d-flex flex-column justify-content-center mx-auto mt-4">
        <SeachFilters filters={filters} onSearch={searchHandler} />
        <div className="card-container ">
          <Row>
            {sortedProjects.length > 0 &&
              sortedProjects.map((project) => {
                return (
                  <ProjectCard
                    key={project[0]?.id}
                    project={project[0]}
                    userData={userData}
                  />
                );
              })}
          </Row>
        </div>
      </div>
    </div>
  );
}
