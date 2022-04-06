import React from 'react'

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Contact() {
  return (
    <div>
      <Box id="contact" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          m: 0, p:0, gap: 1
        }}
      >
        <Typography variant="h4" component="div">
          Contact
        </Typography>

        <Typography variant="h5" component="div">Address: Bangkok, Thailand</Typography>
        <Typography variant="h5" component="div">Email: songvut.nakrong@gmail.com</Typography>
        <Typography variant="h5" component="div">Tel: +66 96 615 3710</Typography>
      </Box>

      <Divider sx={{mt: 3, mb: 1}} />
    </div>
  )
}