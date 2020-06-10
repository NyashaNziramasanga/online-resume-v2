import React from 'react';
import Styles from './Button.module.scss';

export const Button = (props) => {
  return (
    <a
      className={Styles.button}
      href={props.URL}
      download="resume-of-nyasha-nash-nziramasanga.pdf"
    >
      <div className={Styles.buttonLink}>PDF of my full resume</div>
    </a>
  );
};
