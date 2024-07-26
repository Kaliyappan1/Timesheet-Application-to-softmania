import React from "react";
import "../../assets/styles/AdminDashboard.css";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import UpdateIcon from "@mui/icons-material/Update";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AdminSidebar from "../global/Sidebar";
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
    <div className="adminDashboard">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography sx={{ fontSize: 25, fontWeight: 700, ml: 2 }}>
            Admin Dashboard
          </Typography>
        </div>
        <div>
          <Stack>
            <Avatar {...stringAvatar("Kaliyappan")} />
          </Stack>
        </div>
      </Box>

      <div className="admin-content">
        <div className="employee-container">
          <Card sx={{ minWidth: 250, minHeight: 200, m: 3 }}>
            <CardContent sx={{ alignItems: "center", pl: 3 }}>
              <Typography variant="h6">Employees</Typography>
              <div className="employe-count">
                <PeopleIcon sx={{ fontSize: 35 }} />
                <Typography sx={{ ml: 2, fontSize: 26 }}>8</Typography>
              </div>
              <Typography sx={{ fontSize: 12 }}>Active empolyees</Typography>
            </CardContent>
            <CardActions sx={{ ml: 1, mt: 2 }}>
              <Link to="/admin-teams">
                <Button size="small" color="success">
                  Manage Employees
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
        <div className="admin-timesheet-container">
          <Card sx={{ minWidth: 250, minHeight: 200, m: 3 }}>
            <CardContent sx={{ alignItems: "center", pl: 3 }}>
              <Typography variant="h6">Daily - Timesheets</Typography>
              <div className="employe-count">
                <UpdateIcon sx={{ fontSize: 32 }} />
                <Typography sx={{ ml: 2, mr: 3, fontSize: 25 }}>8</Typography>

                <TaskAltIcon sx={{ ml: 2, fontSize: 30 }} />
                <Typography sx={{ ml: 2, fontSize: 25 }}>2</Typography>
              </div>
              <div className="employe-count">
                <Typography sx={{ fontSize: 12 }}>Pending TS</Typography>
                <Typography sx={{ fontSize: 12, ml: 6 }}>Updated TS</Typography>
              </div>
            </CardContent>
            <CardActions sx={{ marginLeft: 1, mt: 0 }}>
              <Link to="/admin-timesheets">
                <Button size="small" color="success">
                  View Timesheets
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
