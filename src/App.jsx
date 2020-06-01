import React from 'react';
import './App.css';
import { Left } from './components/left';
import { Right } from './components/right';

export const App = () => {
  return (
    <div className="app">
      <Left
        name={"Hey, I'm Nyasha (Nash)"}
        subtext={'Software Developer based in Adelaide, Australia'}
        jobStatus={''}
        githubURL={'https://github.com/NyashaNziramasanga'}
        twitterURL={'https://twitter.com/NyashaNziboi'}
        linkedinURL={
          'https://www.linkedin.com/in/nyasha-nash-nziramasanga-446380116/'
        }
      />
      <Right
        intro={''}
        resumeURL={'/files/resume-of-nyasha-nash-nziramasanga.pdf'}
      />
    </div>
  );
};
