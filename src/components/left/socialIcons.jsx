import React from 'react';

export const SocialIcon = (props) => {
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
