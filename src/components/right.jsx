import React from 'react';
import Education from './right/education';

const Left = (props) => {
  return (
    <div className="right">
      <div className="right-inner">
        <div className="introduction">
          <h4>Intro</h4>
          <div className="content">
            <p className="intro-p">
              Software Developer developing web applications using Javascript
              Frameworks, currently specialising in MERN Stack (MongoDB,
              Express.js, React.js and Node.js).{' '}
            </p>
            <p className="intro-p">
              I enjoy being developing and maintaining fullstack software
              applications, and feel right at home as a Software Developer.
              I&#39;m experienced in developing and designing products for the
              web.
            </p>
            <span className="intro-p job-pls">
              I&#39;m currently studying a Masters of Computer Science at
              Flinders University Adelaide which I will complete in Dec 2021.
            </span>
          </div>
        </div>
        <div className="skills">
          <h4>Skills</h4>
          <div className="content">
            <div className="skill-category">
              <strong>Languages: &nbsp;</strong>
              <span>JavaScript (ES6), HTML5, CSS3, Java</span>
            </div>
            <div className="skill-category">
              <strong>Libraries &amp; Frameworks: &nbsp;</strong>
              <span> Node.js, MongoDB, Express.js, React.js</span>
            </div>
            <div className="skill-category">
              <strong>Tools: &nbsp;</strong>
              <span>
                Git &amp; Github, Command Line, Postman, Adobe Creative Cloud,
                Microsoft Azure, MongoDB
              </span>
            </div>
          </div>
        </div>
        <div className="education">
          <h4>Education</h4>
          <div className="content">
            <Education
              universityUrl={'https://www.flinders.edu.au/'}
              university={'Flinders University'}
              city={'Adelaide'}
              duration={'Feb 2020 - Current'}
              facultyUrl={'https://www.flinders.edu.au/study/science'}
              faculty={'College of Science & Engineering'}
              major={'Master of Science, Computer Science'}
            />

            <Education
              universityUrl={'https://www.monash.edu/'}
              university={'Monash University'}
              city={'Melbourne'}
              duration={'July 2014 - Dec 2017'}
              facultyUrl={'https://www.monash.edu/it'}
              faculty={'Faculty of Information Technology (FIT)'}
              major={'Bachelor’s Degree, Information Technology and Systems'}
            />
          </div>
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <div className="content">
            <div className="exp-item">
              <div className="job">
                <a
                  className="company"
                  href="https://platformers.com.au/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Platformers
                </a>
                <div className="duration">Feb 2019 &mdash; Feb 2020</div>
              </div>
              <div className="title">Junior Software Developer</div>
              <ul className="description">
                <p>
                  As a Software Developer, at Platformers, I am a member of the
                  Billow Software development team of 4 developers that managed
                  and support multiple client databases primarily in the
                  construction industry. Developing and implementing custom web
                  applications solutions for the Upvise.js Framework.
                </p>
                <li>
                  Research, design, and implementation of web applications using
                  MERN Stack (Mongo DB, Express.js, React.js, Node.js)
                </li>
                <li>
                  Working closely with clients and partners on multiple projects
                  from development, deployment, and maintenance of databases
                </li>
                <li>
                  Developing cloud strategies, architects and serverless cloud
                  solutions on Microsoft Azure Cloud Platform
                </li>
                <li>
                  Maintaining relationships with software vendors and partners
                  on integrations
                </li>
                <li>Version control of the Upvise.js code base GitHub</li>
                <li>
                  Developing Web APIs and Integrations to Upvise Framework
                </li>
              </ul>
            </div>
            <div className="exp-item">
              <div className="job">
                <a
                  className="company"
                  href="https://www.carbar.com.au/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Carbar Auto
                </a>
                <div className="duration">Oct 2018 &mdash; Jan 2019</div>
              </div>
              <div className="title">Intern Web Developer</div>
              <ul className="description">
                <p>
                  As a Web Developer at Carbar Auto, I was a member of the
                  development team that constructed both customer-facing and
                  administrative sites for managing the sales and subscriptions
                  of Carbar vehicles.
                </p>
                <li>Built web applications using the Laravel PHP framework</li>
                <li>Utilised HTML5, JavaScript frameworks, and CSS3</li>
                <li>
                  Developed and managed database using database technologies
                  such as MySQL, DataGrip and Oracle
                </li>
                <li>
                  Implemented CRUD (Create, Read, Update, Delete) functionality
                  for admin use
                </li>
                <li>Project management through Jira and Confluence</li>
                <li>API design and development for mobile app</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects">
          <h4>Projects</h4>
          <div className="content">
            <div className="project-item">
              <a
                className="project-title"
                href="http://www.monashphotographyclub.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Monash Photography Club
              </a>
              <p className="project-desc">
                Wordpress website for a student ran photography club with over
                100 members.
              </p>
            </div>
          </div>
        </div>

        <a href="https://wakatime.com">
          <img
            className="chart"
            alt="wakatime-chart"
            src="https://wakatime.com/share/@Nash/fc0ed910-2ab2-4790-aa68-06eac111b89e.png"
          />
        </a>

        <a
          className="resume"
          href={props.resumeURL}
          download="resume-of-nyasha-nash-nziramasanga.pdf"
        >
          <div className="resume-link">PDF of my full resume</div>
        </a>
      </div>
    </div>
  );
};

export default Left;
