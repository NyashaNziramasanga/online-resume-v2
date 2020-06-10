import React from 'react';
import Styles from './Paragraph.module.scss';

export const Paragraph = (props) => {
  return (
    <div>
      <p className={Styles.paragraph}>{props.content}</p>
    </div>
  );
};
