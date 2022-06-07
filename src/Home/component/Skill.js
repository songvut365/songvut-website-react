import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';

function Skill(props) {
  return (
    <div>
      {Array.from(props.skills).map((skill, index) => (
        <Accordion sx={{borderBottom: 0}} key={index} >
          <Fade>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{skill.name}</Typography>
            </AccordionSummary>
          </Fade>
          {/* Check skill type */}
          {skill.name !== "Language Proficiency" ? (
            <Fade>
              <AccordionDetails 
                sx={{
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: {xs: 1, md: 3, xl: 8},
                  justifyContent: {xs: 'space-around', lg: "center"}
                }}
              >
                {Array.from(skill.lists).map((list, index) => (
                    <Box  
                      key={index} 
                      sx={{
                        display: 'flex', 
                        mb: 1, 
                        alignItems: 'center', 
                        flexDirection: "column", 
                        gap: 1,
                        textAlign: 'center'}}
                    >
                      <img src={list.image} width="80px" alt={list.name} />
                      <Typography variant="caption" sx={{fontWeight: 500}}>{list.name}</Typography>
                    </Box>
                  ))}
              </AccordionDetails>
            </Fade>
          ) : (
          // Language skills
            <Fade>
              <AccordionDetails 
                sx={{
                  display: 'flex', 
                  flexWrap: 'wrap',
                  justifyContent: { xs:  'space-around', xl: 'center'},
                }}
              >
                {Array.from(skill.lists).map((list, index) => (
                  <Box 
                    key={index}
                    sx={{
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: 1,
                      maxWidth: { xs: 0.5, sm: 0.3, xl: 200 },
                      minWidth: { xs: 0.5, sm: 0.3, xl: 200 },
                      mb: 2,
                    }}
                  >
                    <Avatar sx={{bgcolor: list.bgcolor, color: list.textcolor }} variant="square">{list.abb}</Avatar>
                    <Typography variant="caption" sx={{fontWeight: 500}}>{list.name} : {list.detail}</Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Fade>
          )}
        </Accordion>
      ))}
    </div>
  )
}

export default Skill;