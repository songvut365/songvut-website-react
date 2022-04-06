import React, { useState } from 'react'

import Profile from '../../assets/profile.jpg'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Summary() {
  const [firstName] = useState("songvut");
  const [lastName,] = useState("nakrong")
  const [career] = useState("web developer")
  const [description] = useState("Hi! I'm 24 years old, A fresh graduate seeking a full-time position in the field of web developer, where I can apply my knowledge and skills for continuous improvement.")

  return (
    <div>
      <Card sx={{display: 'flex'}} id="summary">
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={Profile}
          alt="Image Profile"
        />

        <CardContent>
          <Typography id="header" variant="h3" component="div" sx={{mb: 2}}>
            {firstName} {lastName}
          </Typography>
          <Typography id="career" variant="h4" component="div" sx={{mb: 2}}>
            {career}
          </Typography>
          <Typography id="description" variant="p" component="div">
            {description}
          </Typography>
        </CardContent>
      </Card>

      <Divider sx={{mt: 4, mb: 2}} />
    </div>
  )
}