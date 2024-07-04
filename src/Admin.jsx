import React from 'react'
import "./Admin.css"
import { Link } from 'react-router-dom'
import { Box, Button, Checkbox, TextField } from '@mui/material'

function Admin() {
  return (
    <div className='admin'>
       
        <h2 className="admin-headline">Admin SignIn</h2>
        <h6 className="admin-subline ">manage your business Powerful admin tools</h6>
        <Box
          component="form"
          sx={{
            mt: 2,
            "& .MuiTextField-root": {
              m: 1,
              width: "25ch"
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField color="success" id="outlined-basic" label="Email" variant="outlined" />
          </div>
          <div>
            <TextField
            color="success"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>
        </Box>
        <div className="admin-custamized-space">
          <Checkbox color='success' />
          <p className="admin-remember">Remember me</p>
          
        </div>
        <Button
          sx={{ pl: 11, pr: 11, pb: 1, pt: 1, mt: 3,mb:2 }}
          variant="contained"
          color="success"
        >
          Login
        </Button>
        
    </div>
  )
}

export default Admin