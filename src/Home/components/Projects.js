import React from 'react'

import Project from './Project';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <div>
      <Typography id="projects" variant="h3" component="div">
        PROJECTS
      </Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Project 
          name="VCAPTCHA" 
          description="Human Verification Service using Voice Recognition" 
          src="https://avatars.githubusercontent.com/u/89780796?s=400&u=b179f6040d24c70e5e15560c17dd22c3ace8d688&v=4" 
          url="https://github.com/V-CAPTCHA" />
        <Project 
          name="Search Engine" 
          description="Search engine web application with Django and Elasticsearch" 
          src="https://raw.githubusercontent.com/songvut365/search-engine-django-elasticsearch/main/screenshot1.png" 
          url="https://github.com/songvut365/search-engine-django-elasticsearch" />
        <Project 
          name="GameStore" 
          description="This project about ASP.NET MVC Assignment in Software Studio" 
          src="https://raw.githubusercontent.com/songvut365/GameStore/main/screenshot.jpg" 
          url="https://github.com/songvut365/GameStore" />

      </Box>

      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Button variant="contained" href="https://github.com/songvut365">More Project on GitHub</Button>
      </Box>

      <Divider sx={{mt: 5, mb: 3}} />
    </div>
  )
}