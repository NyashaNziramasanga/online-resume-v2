import React from 'react';
import Education from './right/education';
import Experience from './right/experience';
import Project from './right/project';

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
              I enjoy developing and maintaining fullstack software
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
              <span>JavaScript (ES6), Java, HTML5, CSS3</span>
            </div>
            <div className="skill-category">
              <strong>Libraries &amp; Frameworks: &nbsp;</strong>
              <span> React.js, Node.js, MongoDB, Express.js</span>
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
              duration={'July 2014 - Feb 2018'}
              facultyUrl={'https://www.monash.edu/it'}
              faculty={'Faculty of Information Technology (FIT)'}
              major={'Bachelor’s Degree, Information Technology and Systems'}
            />
          </div>
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <div className="content">
            <Experience
              companyWebsite={'https://platformers.com.au/'}
              companyName={'Platformers'}
              duration={'Feb 2019 - Current'}
              jobTitle={'Junior Software Developer'}
              description={
                'As a Software Developer, at Platformers, I am a member of the Billow Software development team of 4 developers that managed and support multiple client databases primarily in the construction industry. Developing and implementing custom web applications solutions for the Upvise.js Framework.'
              }
              tasks={[
                'Research, design, and implementation of web applications using MERN Stack (Mongo DB, Express.js, React.js, Node.js)',
                'Working closely with clients and partners on multiple projects from development, deployment, and maintenance of databases',
                'Developing cloud strategies, architects and serverless cloud solutions on Microsoft Azure Cloud Platform',
                ' Maintaining relationships with software vendors and partners on integrations',
                'Version control of the Upvise.js code base GitHub',
                'Developing Web APIs and Integrations to Upvise Framework'
              ]}
            />

            <Experience
              companyWebsite={'https://www.carbar.com.au/'}
              companyName={'Carbar Auto'}
              duration={'Oct 2018 - Jan 2019'}
              jobTitle={'Intern Web Developer'}
              description={
                'As a Web Developer at Carbar Auto, I was a member of the development team that constructed both customer-facing and administrative sites for managing the sales and subscriptions of Carbar vehicles.'
              }
              tasks={[
                'Built web applications using the Laravel PHP framework',
                'Utilised HTML5, JavaScript frameworks, and CSS3',
                'Developed and managed database using database technologies such as MySQL, DataGrip and Oracle',
                'Implemented CRUD (Create, Read, Update, Delete) functionality for admin use',
                'Project management through Jira and Confluence',
                'API design and development for mobile app'
              ]}
            />
          </div>
        </div>
        <div className="projects">
          <h4>Projects</h4>
          <div className="content">
            <Project
              projectUrl={'https://platformhub.com.au/'}
              projectName={'Platform Hub'}
              projectDescription={
                'Universal hub for managing users from multiple cloud platforms'
              }
              githubLink={'https://github.com/Billow-Software/Platform-Hub'}
              webLink={'https://platformhub.com.au/'}
            />

            <Project
              projectUrl={
                'https://documenter.getpostman.com/view/9366343/SWTK3ZQF?version=latest'
              }
              projectName={'Dev Camper API'}
              projectDescription={
                'Backend node.js and express.js RESTful API for DevCamper application'
              }
              githubLink={
                'https://github.com/NyashaNziramasanga/Dev-Camper-API'
              }
              webLink={
                'https://documenter.getpostman.com/view/9366343/SWTK3ZQF?version=latest'
              }
            />
            <Project
              projectUrl={'#'}
              projectName={'GitHub User Finder'}
              projectDescription={'React App to search Github user profiles'}
              githubLink={
                'https://github.com/NyashaNziramasanga/GitHub-User-Finder'
              }
              webLink={null}
            />

            <Project
              projectUrl={'http://www.monashphotographyclub.com/'}
              projectName={'Monash Photography Club'}
              projectDescription={
                'Wordpress website for a student ran photography club with over 100+ members.'
              }
              githubLink={null}
              webLink={'http://www.monashphotographyclub.com/'}
            />
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
