import React from 'react';

import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

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
                GPA: {education.gpa}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

export default Education;