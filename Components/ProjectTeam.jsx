import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import UserAvatar from './UserAvatar'

function ProjectTeam(props) {
    const members = Object.values(props.members)
    const tags = Object.values(props.tags)
    return (
        <div>
            <h4 className='BlueTitle'>{'Integrantes'}</h4>
            <div className='d-flex flex-column h-100'>
            {members.length > 0 && members.map((element) => <UserAvatar image={'none'} name ={element}/>)}
            </div>
        </div>
    )
}

export default ProjectTeam