import React from 'react';

export const Skills = (props) => {
  return (
    <div className="skill-category">
      <strong>{props.heading}</strong>
      <span>{props.text}</span>
    </div>
  );
};
