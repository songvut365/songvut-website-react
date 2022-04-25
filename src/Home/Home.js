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
    <div>
      {Array.from(props.skills).map((skill, index) => (
        <Accordion sx={{borderBottom: 0}} key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{skill.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Array.from(skill.lists).map((list, index) => (
              <Typography variant="subtitle1" key={index}>
                • { list.name }: {list.detail}
              </Typography>
            ))}
          </AccordionDetails>
      </Accordion>
      ))}
    </div>
  )
}

function Experience(props) {
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
        {Array.from(props.experiences).map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{flex: 0, display: 'none'}}>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector sx={{bgcolor: 'primary.main'}} />
            </TimelineSeparator>

            <TimelineContent sx={{width: 1}}>
              <Typography variant="h6" component="div">
                {experience.location}
              </Typography>
              <Typography variant="p" component="div">
                {experience.position}
              </Typography>
              <Typography variant="p" component="div">
                {experience.period}
              </Typography>
              {Array.from(experience.details).map((detail, index) => (
                <Typography variant="p" component="div" key={index}>
                  • {detail}
                </Typography>
              ))}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

function Education(props) {
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
        {Array.from(props.educations).map((education, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{flex: 0, display: 'none'}}>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector sx={{bgcolor: 'primary.main'}} />
            </TimelineSeparator>

            <TimelineContent sx={{width: 1}}>
              <Typography variant="h6" component="div">
                {education.location}
              </Typography>
              <Typography variant="p" component="div">
                {education.level}, {education.major}
              </Typography>
              <Typography variant="p" component="div">
                {education.period}
              </Typography>
              <Typography variant="p" component="div">
                {education.gpa}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

function Project(props) {
  return (
    <Grid
      container 
      spacing={{ xs: 2, md: 2 }} 
      columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
    >
      {Array.from(props.projects).map((project, index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={index} >
          <Card sx={{height: 1, display: 'flex', flexDirection: 'column'}} >
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt="project image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.detail}
              </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'flex-end', flexGrow: 1, alignItems: 'flex-end'}}>
              <Button size="small" href={project.url} target="_blank">More Details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}

      <Grid item xs={12} sm={12} md={12} lg={12}
        sx={{display: 'flex', justifyContent: 'center', mt: 3, mb: 3}}
      >
        <Button variant="outlined" href="https://github.com/songvut365" target="_blank">
          More Projects
        </Button>
      </Grid>
    </Grid>
  )
}

function Home() {
  const skills = [
    {
      name: "Programming Language",
      lists: [
        {
          name: "JavaScript",
          detail: ""
        },
        {
          name: "Python",
          detail: ""
        },
        {
          name: "Golang",
          detail: ""
        },
        {
          name: "Java",
          detail: ""
        }
      ]
    },
    {
      name: "Back-end Framework",
      lists: [
        {
          name: "Express.js",
          detail: ""
        },
        {
          name: "Django",
          detail: ""
        },
        {
          name: "Fiber",
          detail: ""
        },
      ]
    },
    {
      name: "Front-end Framework",
      lists: [
        {
          name: "Vue.js",
          detail: ""
        },
        {
          name: "React.js",
          detail: ""
        },
      ]
    },
    {
      name: "Database",
      lists: [
        {
          name: "MySQL",
          detail: ""
        },
        {
          name: "MongoDB",
          detail: ""
        },
        {
          name: "SQLite",
          detail: ""
        },
      ]
    },
    {
      name: "Tools",
      lists: [
        {
          name: "Git",
          detail: ""
        },
        {
          name: "Docker",
          detail: ""
        },
        {
          name: "Figma",
          detail: ""
        },
        {
          name: "Insomnia",
          detail: ""
        }
      ]
    }
  ]

  const experiences = [
    {
      location: "Classic Home Hatyai",
      position: "Admin",
      period: "Jun 2018 - Jul 2019",
      details: [
        "Manage and maintain website with WordPress",
        "Prepare documents such as quotations, tax invoices, receipts, etc."
      ]
    },
    {
      location: "Advance Corporation Group Co.,Ltd",
      position: "Intern",
      period: "May 2017 - Sep 2017",
      details: [
        "Installation, repair, maintenance of CCTV systems"
      ]
    }
  ]

  const educations = [
    {
      location: "King Mongkut's Intitue of Technology Ladkrabang",
      level: "Bachelor of Engineering",
      major: "Computer Engineering",
      period: "Aug 2019 - May 2022",
      gpa: "3.50"
    },
    {
      location: "Hatyai Technical College",
      level: "High Vocational Certificate",
      major: "Computer Technology",
      period: "May 2016 - Mar 2018",
      gpa: "3.59"
    }
  ]

  const projects = [
    {
      name:"VCAPTCHA",
      image:"https://avatars.githubusercontent.com/u/89780796?s=200&v=4",
      detail:"Human Verification Service using Voice Recognition The purpose is to create a system to determine that users are human instead of using images",
      url:"https://vcaptcha.work/",
    },
    {
      name:"Search Engine",
      image:"https://raw.githubusercontent.com/songvut365/search-engine-django-elasticsearch/main/screenshot1.png",
      detail:"Search Engine Web Application with Django and Elasticsearch, Searching Information about COVID-19",
      url:"https://github.com/songvut365/search-engine-django-elasticsearch",
    },
    {
      name:"Game Store",
      image:"https://raw.githubusercontent.com/songvut365/GameStore/main/screenshot.jpg", 
      detail:"Game Store with ASP .NET MVC, Online Store, Shopping cart and Payment",
      url:"https://github.com/songvut365/GameStore",
    },
    {
      name:"DFA ATM",
      image:"https://raw.githubusercontent.com/songvut365/DFA-ATM/master/screenshot.png",
      detail:"Automatic Teller Machine using Deterministic Finite Automaton, Web application",
      url:"https://dfa-atm.web.app/",
    },
    {
      name:"Hairzer",
      image:"https://raw.githubusercontent.com/songvut365/hairzer/master/image/home-page.jpg",
      detail:"Hairzer - Hair Service Management, Web Application",
      url:"https://github.com/songvut365/hairzer",
    },
  ]

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

              {/* Skills */}
              <Box sx={{pt: 1, pb: 1, pl:2, pr:2}}>
                <h1>SKILLS</h1>
                <Skill skills={skills} />

                <Divider sx={{mt: 4}}/>
              </Box>

              {/* Work experience */}
              <Box sx={{pt: 1, pb: 1, pl:2, pr:2}}>
                <h1>WORK EXPERIENCE</h1>
                <Experience experiences={experiences} />
                <Divider />
              </Box>
                        
              {/* Education */}
              <Box sx={{pt: 1, pb: 1, pl:2, pr:2}}>
                <h1>EDUCATION</h1>
                <Education educations={educations} />
                <Divider />
              </Box>

              {/* Projects */}
              <Box sx={{pt: 1, pb: 1, pl:2, pr:2}}>
                <h1>PROJECTS</h1>

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