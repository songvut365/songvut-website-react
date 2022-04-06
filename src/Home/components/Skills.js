import React from 'react'

import Skill from './Skill'

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Skills() {
  return (
    <div>
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
    </div>
  )
}