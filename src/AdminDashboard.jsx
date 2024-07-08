import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import UpdateIcon from '@mui/icons-material/Update';

function AdminDashboard() {
  return (
    <div className='adminDashboard'>
        <div className="sidbar">
            <Sidebar/>
        </div>
        <div className="admin-content">
            <div className="employee-container">
            <Card sx={{ minWidth: 250,minHeight:200, m: 3}}>
              <CardContent sx={{alignItems: "center", pl: 3}}>
                  <Typography variant='h6'>
                    Employees
                  </Typography>
                  <div className="employe-count">
                      <PeopleIcon sx={{fontSize: 40}}/>
                      <Typography sx={{ml: 5, fontSize: 30}}>8</Typography>
                  </div>
                  <Typography sx={{ fontSize: 12}}>
                    Active empolyees
                  </Typography>
              </CardContent>
              <CardActions sx={{ ml: 1, mt: 2}}>
                <Button size='small' color='success'>
                  Manage Employees
                </Button>
              </CardActions>
            </Card>
            </div>
            <div className="admin-timesheet-container">
            <Card sx={{ minWidth: 250,minHeight: 200, m: 3}}>
              <CardContent sx={{alignItems: "center", pl: 3}}>
                  <Typography variant='h6'>
                    Daily - Timesheets
                  </Typography>
                  <div className="employe-count">
                      <PendingActionsIcon sx={{fontSize: 35}}/>
                      <Typography sx={{ml: 2,mr:3, fontSize: 28}}>8</Typography>
                    
                      <UpdateIcon sx={{ml: 2, fontSize: 35}}/>
                      <Typography sx={{ml: 2, fontSize: 28}}>2</Typography>
                  
                  </div>
                  <div className='employe-count'>

                  <Typography sx={{ fontSize: 12}}>
                    Pending TS
                  </Typography>
                  <Typography sx={{ fontSize: 12, ml: 6}}>
                    Updated TS
                  </Typography>
                  </div>
              </CardContent>
              <CardActions sx={{ marginLeft: 1,mt: 0}}>
                <Button size='small' color='success'>
                  Manage Employees
                </Button>
                 
              </CardActions>
            </Card>
            </div>
            
        </div>
    </div>
  )
}

export default AdminDashboard