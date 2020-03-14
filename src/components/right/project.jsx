import React from 'react';

const project = (props) => {
  return (
    <div className="project-item">
      <div className="project-title">
        <a href={props.projectUrl} rel="noopener noreferrer" target="_blank">
          {props.projectName}
        </a>
        <div className="project-links">
          {props.githubLink ? (
            <a href={props.githubLink}>
              <i className="fab fa-github"></i>
            </a>
          ) : null}
          {props.webLink ? (
            <a href={props.webLink}>
              <i className="fas fa-globe"></i>
            </a>
          ) : null}
        </div>
      </div>
      <p className="project-desc">{props.projectDescription}</p>
    </div>
  );
};

export default project;
