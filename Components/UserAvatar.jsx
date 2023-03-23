import { Avatar } from '@mui/material';
import React from 'react';

function UserAvatar({ image, name }) {
  return (
    <div className="">
      <div className="userAvatar">
        <Avatar src={image || null} />
        <h6 className="avatarName">{name}</h6>
      </div>
    </div>
  );
}

export default UserAvatar;
