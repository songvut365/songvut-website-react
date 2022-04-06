import React from 'react';
import './Home.css';

import Sidebar from './components/Sidebar';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function Home() {
    return (
    <div className="Home">
      <Toolbar />
      <Sidebar />
      <Summary />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      
      <Box id="alright" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          m: 0, p:0, gap: 1
        }}
      >
        <h4>©2021 ALLRIGHT RESERVE</h4>
      </Box>
    </div>
  );
}

export default Home;