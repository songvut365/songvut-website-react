import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default  function Project(props) {
  return (
    <div className="Project">
      <Card sx=
        {{
          display: 'flex', 
          flexWrap: 'wrap', 
          width: 330, height: 500,
          mt: 3, mb: 3, mr: 3
        }}>
        <CardMedia 
          component="img"
          height="300"
          image={props.src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', width: 1, justifyContent: 'center'}}>
          <Button size="small" href={props.url}>Details</Button>
        </CardActions>
      </Card>
    </div>
  )
}