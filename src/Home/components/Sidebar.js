import React from 'react';

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';

import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import FolderIcon from '@mui/icons-material/Folder';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Sidebar() {
  return (
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List 
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            height: 1
          }}
        >
          <Divider />
          <ListItem>
            <IconButton aria-label="home" href="#summary">
              <HomeIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton aria-label="skills" href="#skills">
              <StarIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton aria-label="education" href="#education">
              <SchoolIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton aria-label="projects" href="#projects">
              <FolderIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton aria-label="contact" href="#contact">
              <PhoneIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
  )
}