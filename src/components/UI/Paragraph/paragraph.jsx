import React from 'react';
import Styles from './Paragraph.module.scss';

export const Paragraph = (props) => {
  return <p className={Styles.paragraph}>{props.content}</p>;
};
