import React from 'react';
import Styles from './SocialIcon.module.scss';

export const SocialIcon = (props) => {
  return (
    <a
      className={Styles.socialIcon}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={props.icon}></i>
    </a>
  );
};
