import React from 'react';

import './Home.css';

import { skills, experiences, educations, projects } from './data';

import Skill from './component/Skill';
import Experience from './component/Experience';
import Education from './component/Education';
import Project from './component/Project';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Home() {
  return (
    <div className="Home">
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Grid 
          container 
          spacing={{ xs: 2, md: 2 }} 
          columns={{ xs: 12, sm: 12, md: 9, lg: 11, xl: 11 }}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          {/* Left Section */}
          <Grid item xs={12} sm={4} md={3} lg={2} id="left">
            <Paper 
              sx={{ position: {xl: 'fixed'}, zIndex: 5, maxWidth: {xl: 0.17} }} 
              elevation={2} 
            >
              <Card sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'white' }} elevation={0} >
                {/* Personal Information */}
                <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: 1, height: {xl: 304} }}
                  image="/static/profile.jpg"
                  alt="Live from space album cover"
                />
                </CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{color: '#0984e3'}}>
                    SONGVUT NAKRONG
                  </Typography>
                  <Typography variant="p" component="div">
                    WEB DEVELOPER
                  </Typography>

                  <Divider sx={{mt: 2, mb: 1}} />

                  {/* Summary */}
                  <Typography variant="h6" component="div">
                    Summary
                  </Typography>
                  <Typography variant="p" component="div">
                    Hi! I'm 24 years old, A fresh graduate seeking a full-time position in the field of web development, Where I can apply my knowledge and skills for continuous improvement.
                  </Typography>

                  <Divider sx={{mt: 2, mb: 1}} />

                  {/* Contact */}
                  <Typography variant="h6" component="div">
                    Contact
                  </Typography>
                  <Box sx={{display: 'flex', mb: 1, alignItems: 'center', gap: 1}}>
                    <EmailIcon color="action" fontSize="small"/>
                    <span>songvut.nakrong@gmail.com</span><br></br>
                  </Box>
                  <Box sx={{display: 'flex', mb: 1, alignItems: 'center', gap: 1}}>
                    <LocalPhoneIcon color="action" fontSize="small" />
                    <span>096 615 3710</span><br></br>
                  </Box>
                  <Box sx={{display: 'flex', mb: 1, alignItems: 'center', gap: 1}}>
                    <LocationOnIcon color="action" fontSize="small" />
                    <span>Bangkok, Thailand</span><br></br>
                  </Box>
                  
                  <Divider sx={{mt: 2, mb: 2}} />

                  {/* Social Media */}
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <IconButton aria-label="github" href="https://www.github.com/songvut365" target="_blank">
                      <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/songvut-nakrong/"  target="_blank">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="facebook" href="https://www.facebook.com/songvut.365/" target="_blank">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="instagram" href="https://www.instagram.com/songvut.365/" target="_blank">
                      <InstagramIcon />
                    </IconButton>
                  </Stack>

                  <Divider sx={{mt: 2, mb: 2}} />

                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Button variant="outlined" fullWidth startIcon={<DownloadIcon />} disabled>Resume</Button>
                  </Stack>
                </CardContent>
              </Card>

            </Paper>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={8} md={6} lg={5} sx={{pb: 4}} id="right">
            <Paper sx={{bgcolor: 'white', p: 2}} elevation={2} >

              {/* Skills */}
              <Box sx={{pt: {lg: 1}, pb: {lg: 1}, pl:{lg: 2}, pr:{lg: 2}}}>
                <Typography variant="h4" component="div" sx={{color: '#0984e3'}}>
                  SKILLS
                </Typography>
                <Skill skills={skills} />

                <Divider sx={{mt: 5}}/>
              </Box>

              {/* Work experience */}
              <Box sx={{pt: 3, pb: {lg: 1}, pl:{lg: 2}, pr:{lg: 2}}}>
                <Typography variant="h4" component="div" sx={{color: '#0984e3'}}>
                  WORK EXPERIENCE
                </Typography>
                <Experience experiences={experiences} />
                <Divider />
              </Box>
                        
              {/* Education */}
              <Box sx={{pt: 3, pb: {lg: 1}, pl:{lg: 2}, pr:{lg: 2}}}>
                <Typography variant="h4" component="div" sx={{color: '#0984e3'}}>
                  EDUCATION
                </Typography>
                <Education educations={educations} />
                <Divider />
              </Box>

              {/* Projects */}
              <Box sx={{pt: 3, pb: {lg: 1}, pl:{lg: 2}, pr:{lg: 2}}}>
                <Typography variant="h4" component="div" sx={{color: '#0984e3', mb: 2}}>
                  PROJECTS
                </Typography>
                <Project projects={projects} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;