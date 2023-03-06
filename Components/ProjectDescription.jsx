import React, { useEffect } from 'react'
import { GENERIC_TEXT } from '../Utils/Constants';

function ProjectDescription({ description }) {
    return (
        <div className='ProjectDescription'>
            <div>
                <h2 className='BlueTitle'>{"Descripcion del proyecto"}</h2>
                <p className='projectTitle'>{description}</p>
            </div>

            <div>
                <h2 className='BlueTitle'>{"Informacion Adicional"}</h2>
                <p className='projectTitle'>{GENERIC_TEXT}</p>
            </div>
        </div>
    )
}

export default ProjectDescription