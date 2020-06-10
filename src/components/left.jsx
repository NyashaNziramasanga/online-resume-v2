import React from 'react';
import { SocialIcon } from './UI/SocialIcon/socialIcon';
import { fadeIn, fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const Left = (props) => {
  const FadeIn = styled.div`
    animation: 5s ${keyframes`${fadeIn}`};
  `;
  const FadeInDown = styled.div`
    animation: 3s ${keyframes`${fadeInDown}`};
  `;

  return (
    <div>
      <div className="left">
        <FadeIn>
          <div className="bg-img" />
        </FadeIn>
        <div className="left-inner">
          <div className="info">
            <FadeInDown>
              <h2 className="name">{props.name}</h2>
            </FadeInDown>
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
