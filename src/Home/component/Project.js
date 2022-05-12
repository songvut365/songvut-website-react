import React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Fade from 'react-reveal/Fade';

function Project(props) {
  return (
    <Grid
      container 
      spacing={{ xs: 2, md: 2 }} 
      columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
    >
      {Array.from(props.projects).map((project, index) => (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={index} >
            <Card sx={{height: 1, display: 'flex', flexDirection: 'column'}} >
             <Fade>
                <CardActionArea href={project.url} target="_blank" >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt="project image"
                  />
                </CardActionArea>
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
              </Fade>
            </Card>
        </Grid>
      ))}

      <Grid item xs={12} sm={12} md={12} lg={12}
        sx={{display: 'flex', justifyContent: 'center', mt: 3, mb: 3}}
      >
        <Fade>
          <Button variant="outlined" href="https://github.com/songvut365" target="_blank">
            More Projects
          </Button>
        </Fade>
      </Grid>
    </Grid>
  )
}

export default Project;