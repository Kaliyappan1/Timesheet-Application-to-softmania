import { AppBar, Box, Button, Toolbar} from '@mui/material'
import React from 'react'
import logo from "./assets/images/logo.png"
import { Link } from 'react-router-dom'




function Header() {
  return (
    <div>
      <Box>
        <AppBar sx={{  }} color='success' position='static'>
          <Toolbar>
          <Box sx={{flexGrow: 1}}>
          <Link to="/">
          <Box
            component="img"
            sx={{
            height: 32,
            
            }}
            alt="Softmania"
            src={logo}
        />
          </Link>
          </Box>
            <Link to="/">
            <Button sx={{color: "white",fontWeight:600, pr: 2}} component="div" color='inherit'>Home</Button>
            </Link>
            <Link to="/admin">
            <Button sx={{color: "white", fontWeight:600, pr: 2}} component="div" color='inherit'>Admin</Button>
            </Link>
            <Link to="/login">
            <Button sx={{color: "white", fontWeight:600, pr: 2}} component="div" color='inherit'>Login</Button>
            </Link>
            <Link to="/settings">
            <Button sx={{fontWeight:600, color: "white" }} component="div" color='inherit'>Settings</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header