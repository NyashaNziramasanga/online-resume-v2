import React from 'react';
import './App.css';
import Left from './components/left';
import Right from './components/right';

function App() {
  return (
    <div className="app">
      <Left
        name={"Hey, I'm Nyasha (Nash)"}
        subtext={'Software Developer based in Adelaide, Australia'}
        jobStatus={''}
        githubURL={'https://github.com/NyashaNziramasanga'}
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
}

export default App;
