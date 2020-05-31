import React from 'react';

const socialIcon = (props) => {
  return (
    <a
      className="social-icons"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={props.icon}></i>
    </a>
  );
};

export default socialIcon;
