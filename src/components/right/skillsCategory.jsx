import React from 'react';

const skills = (props) => {
  return (
    <div className="skill-category">
      <strong>{props.heading}</strong>
      <span>{props.text}</span>
    </div>
  );
};
export default skills;
