import React from 'react';

function ProjectDescription({ description, additionalInfo }) {
  return (
    <div className="ProjectDescription">
      <div>
        <h2 className="BlueTitle">{'Descripción del proyecto'}</h2>
        <p className="projectTitle">{description}</p>
      </div>

      <div>
        <h2 className="BlueTitle">{'Información Adicional'}</h2>
        <p className="projectTitle">{additionalInfo}</p>
      </div>
    </div>
  );
}

export default ProjectDescription;
