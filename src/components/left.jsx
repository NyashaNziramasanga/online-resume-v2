import React from 'react';

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
              <a
                href={props.githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href={props.linkedinURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="mailto:nyashanziramasanga@ymail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
