import React, { useState } from 'react';
import './Home.css'
import Skill from './components/Skill'
import Project from './components/Project'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Profile from '../assets/profile.jpg'
import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PhoneIcon from '@mui/icons-material/Phone';

function Home() {
  const [firstName] = useState("songvut");
  const [lastName,] = useState("nakrong")
  const [career] = useState("web developer")
  const [description] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt eleifend lectus, vel cursus sapien interdum vitae. Nullam placerat urna elit, id lobortis urna fringilla eget. Cras non turpis tortor. Phasellus erat turpis, commodo in convallis sit amet, consequat id leo. Nunc laoreet tristique nulla ut porttitor. Morbi in enim ut dolor lobortis porttitor.")

  return (
    <div className="Home">
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{display: 'flex', flexDirection: 'column'}}>
          <ListItem>
            <IconButton aria-label="home">
              <HomeIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton aria-label="skills">
              <TerminalIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton aria-label="education">
              <SchoolIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton aria-label="projects">
              <AccountTreeIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton aria-label="contact">
              <PhoneIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>

      <Card sx={{display: 'flex'}}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={Profile}
          alt="Image Profile"
        />

        <CardContent>
          <Typography id="header" variant="h3" component="div">
            {firstName} {lastName}
          </Typography>
          <Typography id="career" variant="h4" component="div">
            {career}
          </Typography>
          <Typography id="description" variant="p" component="div">
            {description}
          </Typography>
        </CardContent>
      </Card>

      <Divider sx={{mt: 4, mb: 2}} />

      <Typography id="skills" variant="h3" component="div">
        SKILLS
      </Typography>

      <Typography variant="h4" component="div" sx={{mb: 3, mt: 2}}>
        Programming Languages
      </Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Skill name="JavaScript" shortName="JS" color="#f0db4f" description="Use in final project with node.js and vue.js"/>
        <Skill name="Golang" shortName="Go" color="#29BEB0" description="Practice by myself, make nihon vocabulary api and etc." />
        <Skill name="Python"  shortName="py" color="#306998" description="Used to primary language in college such as data structure, image processing."/>
        <Skill name="Java" shortName="J" color="#5382a1" description="Used to learning oop, software architecture and design pattern. " />
      </Box>

      <Typography variant="h4" component="div" sx={{mb: 3, mt: 2}}>
        Front-end Frameworks
      </Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Skill name="Vue.js" shortName="V" color="#41b8b3" description="Use for all front-end of final project and etc."/>
        <Skill name="React.js" color="#61dbfb" shortName="R" description="Use to make this website and practice with skooldio." />
      </Box>
      
      <Typography variant="h4" component="div" sx={{mb: 3, mt: 2}}>
        Back-end Frameworks
      </Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Skill name="Fiber" shortName="F" color="#41b8b3" description="Practice by myself after learning golang fundamental."/>
        <Skill name="Express.js" color="#f0db4f" shortName="E" description="Use in final project and some assignment in college." />
        <Skill name="Django" color="#092e20" shortName="D" description="Use to make small assignment in college such as search engine with elasticsearch." />
      </Box>
      
      
      <Typography variant="h4" component="div" sx={{mb: 3, mt: 2}}>
        Database
      </Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Skill name="MySQL" color="#f29111" shortName="My" description="Use in final project store data of vcaptcha and learn in database course." />
        <Skill name="SQLite" color="#61dbfb" shortName="R" description="Use in small assignment such as GameStore with ASP.Net MVC or my mini project." />
        <Skill name="Firebase" shortName="V" color="#41b8b3" description="Use in assignment Hairzer for store database without setting database server."/>
      </Box>

      <Divider sx={{mt: 3, mb: 3}} />

      <Typography id="skills" variant="h3" component="div">
        EDUCATION
      </Typography>
      <Timeline id="timeline" sx={{alignItem: 'left'}} position="right">
        <TimelineItem>
          <TimelineOppositeContent style={{flex: 0}}>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{bgcolor: 'primary.main'}} />
          </TimelineSeparator>
          <TimelineContent style={{width: 1000}}>
            <Typography variant="h5" component="div">
              King Mongkut's Intitue of Technology Ladkrabang
            </Typography>
            <Typography variant="p" component="div">
              Bachelor of Engineering, Computer Engineering
            </Typography>
            <Typography variant="p" component="div">
              August 2019 - May 2022
            </Typography>
            <Typography variant="p" component="div">
              GPA: 3.50
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{flex: 0}}>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{bgcolor: 'primary.main'}} />
          </TimelineSeparator>
          <TimelineContent style={{width: 1000}}>
            <Typography variant="h5" component="div">
              Hatyai Technical College
            </Typography>
            <Typography variant="p" component="div">
              High Vocational Certificate, Computer Technology
            </Typography>
            <Typography variant="p" component="div">
              May 2016 - March 2018
            </Typography>
            <Typography variant="p" component="div">
              GPA: 3.50
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{flex: 0}}>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{bgcolor: 'primary.main'}} />
          </TimelineSeparator>
          <TimelineContent style={{width: 1000}}>
            <Typography variant="h5" component="div">
              Luang Pratan Rajnikorn Industrial and Community College
            </Typography>
            <Typography variant="p" component="div">
            Vocational Certificate, Electronics Technician
            </Typography>
            <Typography variant="p" component="div">
              May 2012 - March 2015
            </Typography>
            <Typography variant="p" component="div">
              GPA: 3.54
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Divider sx={{mt: 5, mb: 3}} />

      <Typography id="skills" variant="h3" component="div">
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

      <Divider sx={{mt: 3, mb: 3}} />

      <Box id="contact">
        <Typography variant="h5" component="div">
          Contact
        </Typography>

        <span>Bangkok, Thailand</span>
        <span>songvut.nakrong@gmail.com | +66 96 615 3710</span>
      </Box>

      <Divider sx={{mt: 3, mb: 1}} />

      <Box id="alright">
        <h4>©2021 ALLRIGHT RESERVE</h4>
      </Box>
    </div>
  );
}

export default Home;