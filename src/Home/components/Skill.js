import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Skill(props) {
  return (
    <div className="Skill">
      <Box sx=
        {{
          display: 'flex', 
          flexWrap: 'wrap', 
          width: 330, height: 220,
          mb: 3, mr: 3
        }}
      >
        <Paper sx={{p: 2, width: 1/1}}>
          <Avatar sx={{ bgcolor: `${props.color}`}} variant="square">
            {props.shortName}
          </Avatar>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </Paper>
      </Box>                                                             
    </div>                                            
  )
}               
