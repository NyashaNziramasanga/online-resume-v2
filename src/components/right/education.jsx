import React from 'react';

export const Education = (props) => {
  return (
    <div className="edu-item">
      <div className="university">
        <a href={props.universityUrl} target="_blank" rel="noopener noreferrer">
          {props.university}, {props.city}
        </a>
        <div className="duration">{props.duration}</div>
      </div>
      <div className="college">
        <a href={props.facultyUrl} target="_blank" rel="noopener noreferrer">
          {props.faculty}
        </a>
      </div>
      <div className="major">
        <strong>Degree: </strong>
        {props.major}
      </div>
    </div>
  );
};
