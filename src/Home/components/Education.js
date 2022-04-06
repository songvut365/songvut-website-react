import React from 'react'

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function Education() {
  return (
    <div>
      <Typography id="education" variant="h3" component="div">
        EDUCATION
      </Typography>
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
    </div>
  )
}