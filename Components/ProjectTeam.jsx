import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserAvatar from './UserAvatar';
import { Button } from 'react-bootstrap';
import { API_URL } from '../Utils/Constants.js';
import { auth } from '../Utils/firebase';

function ProjectTeam(props) {
  const members = Object.values(props.members || []);
  const skills = Object.values(props.skills || []);

  const [membersFetched, setMembersFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMembers = async () => {
      if (members) {
        const data = members.map(async (member) => {
          const res = await axios.get(API_URL + 'user?id=' + member);
          return { id: member, data: res.data.data };
        });
        const fetchedMembers = await Promise.all(data);
        setMembersFetched(fetchedMembers);
        setIsLoading(false);
      }
    };
    getMembers();
  }, []);

  return (
    <div className="teamContainer">
      <div className="teamPTBttn-Container">
        <Button
          className="primaryButton teamPTBttn"
          onClick={() => {
            props.setShowJoinRequestModal(true);
          }}
          hidden={members.includes(auth.currentUser.uid)}
        >
          Unirme al proyecto
        </Button>
      </div>
      <div className="teamWrapper">
        <h4 className="title mb-4">{'Integrantes'}</h4>
        {membersFetched.length > 0 &&
          !isLoading &&
          membersFetched.map((member) => {
            return (
              <UserAvatar
                key={member.id}
                image={member.data.avatar}
                name={member.data.username}
              />
            );
          })}
      </div>

      <div className="teamWrapper">
        <h4 className="title mb-2 mt-4">Tags</h4>
        <Stack direction="row" spacing={1} className="chips-container">
          {skills.length > 0 &&
            skills.map((skill) => (
              <Chip
                size="large"
                key={skill}
                label={skill}
                variant="outlined"
                className="chip"
                style={{ color: 'white' }}
              />
            ))}
        </Stack>
      </div>
    </div>
  );
}

export default ProjectTeam;
