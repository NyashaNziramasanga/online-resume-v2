import React from 'react';

const Experience = (props) => {
  const tasks = props.tasks.map((task, i) => {
    return <li key={i}>{task}</li>;
  });

  return (
    <div className="exp-item">
      <div className="job">
        <a
          className="company"
          href={props.companyWebsite}
          rel="noopener noreferrer"
          target="_blank"
        >
          {props.companyName}
        </a>
        <div className="duration">{props.duration}</div>
      </div>
      <div className="title">{props.jobTitle}</div>
      <ul className="description">
        <p>{props.description}</p>
        {tasks}
      </ul>
    </div>
  );
};
export default Experience;
