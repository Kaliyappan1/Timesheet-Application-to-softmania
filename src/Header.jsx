import { AppBar, Box, Button, ThemeProvider, Toolbar} from '@mui/material'
import React from 'react'
import logo from "./assets/images/logo.png"
import { Link } from 'react-router-dom'
import theme from './components/Theme'




function Header() {
  return (
    <div>
      <ThemeProvider theme={theme}>

      <Box>
        <AppBar position='static'>
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
            <Button sx={{color: "white",fontWeight:600, pr: 2}} component="div"
            >Home</Button>
            </Link>
            <Link to="/admin">
            <Button sx={{color: "white", fontWeight:600, pr: 2}} component="div"
            >Admin</Button>
            </Link>
            <Link to="/login">
            <Button sx={{color: "white", fontWeight:600, pr: 2}} component="div"
            >Login</Button>
            </Link>
            {/* <Link to="/settings">
            <Button sx={{fontWeight:600, color: "white" }} component="div"
            >Settings</Button>
            </Link> */}
          </Toolbar>
        </AppBar>
      </Box>
      </ThemeProvider>
    </div>
  )
}

export default Header