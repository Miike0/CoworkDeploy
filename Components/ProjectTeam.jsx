import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
import UserAvatar from './UserAvatar';
import { Button } from 'react-bootstrap';

function ProjectTeam(props) {
  const members = Object.values(props.members);
  const tags = Object.values(props.tags);
  return (
    <div className="teamContainer">
      <div className="d-flex justify-content-between">
        <Button className="primaryButton">Unirme al projecto</Button>
        <Button className="secondaryButton">Contactar al líder</Button>
      </div>
      <div className="teamWrapper">
        <h4 className="title mb-4">{'Integrantes'}</h4>
        {members.length > 0 &&
          members.map((element) => (
            <UserAvatar key={element} image={'none'} name={element} />
          ))}
      </div>

      <div className="teamWrapper">
        <h4 className="title mb-2 mt-4">{'Tags'}</h4>
        <Stack direction="row" spacing={1} className="chips-container">
          {tags.length > 0 &&
            tags.map((tag) => (
              <Chip
                size="large"
                key={tag}
                label={tag}
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
