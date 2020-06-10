import React, { Fragment } from 'react';
import Styles from './Wakatime.module.scss';

export const Wakatime = () => {
  return (
    <Fragment>
      <a href="https://wakatime.com">
        <img
          className={Styles.wakatime}
          alt="wakatime-chart"
          src="https://wakatime.com/share/@Nash/fc0ed910-2ab2-4790-aa68-06eac111b89e.png"
        />
      </a>
    </Fragment>
  );
};
