import React from "react";
import "./Home.css";
import { Button, Typography,} from "@mui/material";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <Typography
        sx={{
          m: 2,
          fontSize: {
            xs: 40,
            sm: 50,
            md: 60,
            lg: 70,
            xl: 80,
          
          },
          fontWeight: 550
        }}
        variant="h2"
      >
        Track your time, effortlessly
      </Typography>
      <Typography
        sx={{
          ml: 2,
          mb: 3,
          fontSize: {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 18,
            xl: 19,
          },
          fontWeight: 400
        }}
        variant="subtitle2"
      >
        Timesheet makes it easy to log your hours and stay on top of your
        projects.
      </Typography>

      <Link to="/login">
      <Button color="success" sx={{ ml: 2, backgroundColor: (theme) => theme.palette.success.light  }} size="large" variant="contained">
        Start Tracking
      </Button>
      </Link>
      
     
    </div>
  )
}

export default Home;
