import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SideDrawer from './SideDrawer';


export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
       <SideDrawer  size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}/>
  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Template
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}