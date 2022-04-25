import React from 'react';
import './Home.css';

import Profile from '../assets/profile.jpg';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


function Skill(props) {
  return (
    <Accordion sx={{borderBottom: 0}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{props.header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Array.from(props.details).map((detail, index) => (
          <Typography variant="subtitle1" key={index}>• { detail }</Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

function Project(props) {
  return (
    <Card sx={{height: 1, display: 'flex', flexDirection: 'column'}} >
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt="project image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.detail}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'flex-end', flexGrow: 1, alignItems: 'flex-end'}}>
        <Button size="small" href={props.url} target="_blank">More Details</Button>
      </CardActions>
    </Card>
  )
}

function Education() {
  return (
    <div>
      <Timeline id="timeline" 
        sx={{
          alignItem: 'left', 
          display: 'flex', 
          alignContent: 'flex-start', 
          alignItems: 'flex-start', 
          justifyContent: 'flex-start'
        }} position="right"
      >
        <TimelineItem>
          <TimelineOppositeContent sx={{flex: 0, display: 'none'}}>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{bgcolor: 'primary.main'}} />
          </TimelineSeparator>

          <TimelineContent sx={{width: 1}}>
            <Typography variant="h6" component="div">
              King Mongkut's Intitue of Technology Ladkrabang
            </Typography>
            <Typography variant="p" component="div">
              Bachelor of Engineering, Computer Engineering
            </Typography>
            <Typography variant="p" component="div">
              Aug 2019 - May 2022
            </Typography>
            <Typography variant="p" component="div">
              GPA: 3.50
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent sx={{flex: 0, display: 'none'}}>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{bgcolor: 'primary.main'}} />
          </TimelineSeparator>

          <TimelineContent sx={{width: 1}}>
            <Typography variant="h6" component="div">
              Hatyai Technical College
            </Typography>
            <Typography variant="p" component="div">
              High Vocational Certificate, Computer Technology
            </Typography>
            <Typography variant="p" component="div">
              May 2016 - Mar 2018
            </Typography>
            <Typography variant="p" component="div">
              GPA: 3.50
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

function Experience() {
  return(
    <div>
      <Timeline id="experience" 
        sx={{
          alignItem: 'left', 
          display: 'flex', 
          alignContent: 'flex-start', 
          alignItems: 'flex-start', 
          justifyContent: 'flex-start'
        }} position="right"
      >
        <TimelineItem>
          <TimelineOppositeContent sx={{flex: 0, display: 'none'}}>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{bgcolor: 'primary.main'}} />
          </TimelineSeparator>

          <TimelineContent sx={{width: 1}}>
            <Typography variant="h6" component="div">
              Classic Home Hatyai
            </Typography>
            <Typography variant="p" component="div">
              Admin
            </Typography>
            <Typography variant="p" component="div">
              Jun 2018 - Jul 2019
            </Typography>
            <Typography variant="p" component="div">
              • Manage and maintain website with WordPress
            </Typography>
            <Typography variant="p" component="div">
              • Prepare documents such as quotations, tax invoices, receipts, etc.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{flex: 0, display: 'none'}}>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{bgcolor: 'primary.main'}} />
          </TimelineSeparator>

          <TimelineContent sx={{width: 1}}>
            <Typography variant="h6" component="div">
            Advance Corporation Group Co.,Ltd
            </Typography>
            <Typography variant="p" component="div">
              Intern
            </Typography>
            <Typography variant="p" component="div">
              May 2017 - Sep 2017
            </Typography>
            <Typography variant="p" component="div">
              • Installation, repair, maintenance of CCTV systems
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

function Home() {
    return (
    <div className="Home">
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Grid 
          container 
          spacing={{ xs: 2, md: 2 }} 
          columns={{ xs: 12, sm: 12, md: 9, lg: 11 }}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          {/* Left */}
          <Grid item xs={12} sm={8} md={3} lg={2}>
            <Paper sx={{position: {lg: 'fixed'}, maxWidth: {lg: 0.16}}}>
              <Card sx={{display: 'flex', flexDirection: 'column', bgcolor: 'whitesmoke'}}>
                <CardMedia
                  component="img"
                  sx={{ width: 1 }}
                  image={Profile}
                  alt="Live from space album cover"
                />
                <CardContent>
                  <h2 style={{color: '#0984e3'}}>SONGVUT NAKRONG</h2>
                  <h3>WEB DEVELOPER</h3>

                  <Divider sx={{mb: 3}} />

                  <Typography variant="p" component="div">
                    Hi! I'm 24 years old, A fresh graduate seeking a full-time position in the field of web developer, where I can apply my knowledge and skills for continuous improvement.
                  </Typography>
                  <br></br>

                  <Divider />

                  <h3>Contact</h3>
                  <span className="textBold">Email: </span><span>songvut.nakrong@gmail.com</span><br></br>
                  <span className="textBold">Tel: </span><span>+66 96 615 3710</span><br></br>
                  <span className="textBold">Address: </span><span>Bangkok, Thailand</span><br></br>
                </CardContent>
              </Card>
            </Paper>
          </Grid>

          {/* Right */}
          <Grid item xs={12} sm={8} md={6} lg={5} sx={{pb: 4}}>
            <Paper sx={{bgcolor: 'whitesmoke'}}>
              <Box sx={{pt: 1, pb: 1, pl:2, pr:2}}>
                <h1>SKILLS</h1>
                <Skill 
                  header="Programming Language" 
                  details={['JavaScript', 'Python', 'Golang', 'Java']}
                />
                <Skill 
                  header="Back-end Framework" 
                  details={['Express.js', 'Django', 'Fiber']}
                />
                <Skill 
                  header="Front-end Framework" 
                  details={['Vue.js', 'React.js']}
                />
                <Skill 
                  header="Database" 
                  details={['MySQL', 'MongoDB', 'SQLite', 'Firebase']}
                />

                <Divider sx={{mt: 4}}/>
              </Box>


              <Box sx={{pt: 1, pb: 1, pl:2, pr:2}}>
                <h1>WORK EXPERIENCE</h1>
                <Experience />
                <Divider />
              </Box>
                        

              <Box sx={{pt: 1, pb: 1, pl:2, pr:2}}>
                <h1>EDUCATION</h1>
                <Education />
                <Divider />
              </Box>


              <Box sx={{pt: 1, pb: 1, pl:2, pr:2}}>
                <h1>PROJECTS</h1>
                <Grid
                  container 
                  spacing={{ xs: 2, md: 2 }} 
                  columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                >
                  <Grid item xs={12} sm={12} md={6} lg={4} >
                    <Project 
                      name="VCAPTCHA" 
                      image="https://avatars.githubusercontent.com/u/89780796?s=200&v=4" 
                      detail="Human Verification Service using Voice Recognition The purpose is to create a system to determine that users are human instead of using images"
                      url="https://vcaptcha.work/"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} >
                    <Project 
                      name="Search Engine" 
                      image="https://raw.githubusercontent.com/songvut365/search-engine-django-elasticsearch/main/screenshot1.png" 
                      detail="Search Engine Web Application with Django and Elasticsearch, Searching Information about COVID-19"
                      url="https://github.com/songvut365/search-engine-django-elasticsearch"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} >
                    <Project 
                      name="Game Store" 
                      image="https://raw.githubusercontent.com/songvut365/GameStore/main/screenshot.jpg" 
                      detail="Game Store with ASP .NET MVC, Online Store, Shopping cart and Payment"
                      url="https://github.com/songvut365/GameStore"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} >
                    <Project 
                      name="DFA ATM" 
                      image="https://raw.githubusercontent.com/songvut365/DFA-ATM/master/screenshot.png" 
                      detail="Automatic Teller Machine using Deterministic Finite Automaton, Web application"
                      url="https://dfa-atm.web.app/"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} >
                    <Project 
                      name="Hairzer" 
                      image="https://raw.githubusercontent.com/songvut365/hairzer/master/image/home-page.jpg" 
                      detail="Hairzer - Hair Service Management, Web Application"
                      url="https://github.com/songvut365/hairzer"
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}
                    sx={{display: 'flex', justifyContent: 'center', mt: 3, mb: 3}}
                  >
                    <Button variant="outlined" href="https://github.com/songvut365" target="_blank">
                      More Projects
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;