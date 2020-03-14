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
                className="social-icons"
                href={props.githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="social-icons"
                href={props.linkedinURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="social-icons"
                href="mailto:nyashanziramasanga@ymail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
