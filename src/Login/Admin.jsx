import React from 'react'
import "../assets/styles/Admin.css"
import { Link } from 'react-router-dom'
import { Box, Button, Card, Checkbox, TextField } from '@mui/material'

function Admin() {
  return (
    <div className='admin'>

    <Card sx={{p: 5}}>
    <div className="admin-login-container">
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
        <div className="admin-button">
        
        <button class="button-33" role="button">Go Dashboard</button>

        </div>
       
       </div>
    </Card>
        
    </div>
  )
}

export default Admin