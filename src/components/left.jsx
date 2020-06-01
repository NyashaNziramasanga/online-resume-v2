import React from 'react';
import { SocialIcon } from './left/socialIcons';

const Left = (props) => {
  return (
    <div>
      <div className="left">
        <div className="bg-img"></div>
        <div className="left-inner">
          <div className="info">
            <h2 className="name">{props.name}</h2>
            <div className="subtext">{props.subtext}</div>
            <div className="jobStatus">{props.jobStatus}</div>
            <div className="social-links">
              <SocialIcon link={props.githubURL} icon={'fab fa-github'} />
              <SocialIcon link={props.linkedinURL} icon={'fab fa-linkedin'} />
              <SocialIcon link={props.twitterURL} icon={'fab fa-twitter'} />
              <SocialIcon
                link={'mailto:nyashanziramasanga@ymail.com'}
                icon={'fas fa-envelope'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
