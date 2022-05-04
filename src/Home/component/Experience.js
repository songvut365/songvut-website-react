import React from 'react';

import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

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
              <Typography variant="body1" component="div">
                {experience.position}
              </Typography>
              <Typography variant="body1" component="div">
                {experience.period}
              </Typography>
              {Array.from(experience.details).map((detail, index) => (
                <Typography variant="body1" component="div" key={index}>
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

export default Experience;