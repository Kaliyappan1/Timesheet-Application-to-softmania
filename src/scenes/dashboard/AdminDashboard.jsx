import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import UpdateIcon from "@mui/icons-material/Update";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";

// string to avatar start
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}
// string to avatar end

function AdminDashboard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", padding: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography sx={{ fontSize: 25, fontWeight: 700 }}>
          Admin Dashboard
        </Typography>
        <Stack>
          <Avatar {...stringAvatar("Kaliyappan")} />
        </Stack>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Employees</Typography>
              <Grid container spacing={2} alignItems="center" mt={0.5}>
                <Grid item>
                  <PeopleIcon fontSize="large" />
                </Grid>
                <Grid item>
                  <Typography variant="h6">8</Typography>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Link to="/admin-teams">
                  <Button size="small" color="success">
                    Manage Employees
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Daily - Timesheets</Typography>
              <Grid container spacing={2} alignItems="center" mt={0.5}>
                <Grid item>
                  <UpdateIcon fontSize="large" />
                </Grid>
                <Grid item>
                  <Typography variant="h6">8</Typography>
                </Grid>
                <Grid item>
                  <TaskAltIcon fontSize="large" />
                </Grid>
                <Grid item>
                  <Typography variant="h6">2</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 12 }}>Pending TS</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 12 }}>Updated TS</Typography>
                </Grid>
              </Grid>
              <CardActions>
                <Link to="/admin-timesheets">
                  <Button size="small" color="success">
                    View Timesheets
                  </Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminDashboard;
