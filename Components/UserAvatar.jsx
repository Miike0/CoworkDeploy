import { Avatar } from '@mui/material'
import React from 'react'

function UserAvatar({ image, name }) {
    return (
        <div className=''>
            <div className='userAvatar'>
                <Avatar />
                <h6 className='avatarName'>{name}</h6>
            </div>


        </div>
    )
}

export default UserAvatar