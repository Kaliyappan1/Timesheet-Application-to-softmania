import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import UpdateIcon from "@mui/icons-material/Update";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";
import theme from "../../components/Theme";




// Timesheetentry Component
const Timesheetentry = ({ name, buttonText }) => (
  <Grid
    container
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2,
    }}
  >
    <Grid item xs={6}>
      <Typography>{name}</Typography>
    </Grid>
    <Grid item xs={4}>
      <Button variant="contained" color="success">{buttonText}</Button>
    </Grid>
  </Grid>
);

function createData(name, role, contact) {
  return { name, role, contact };
}

const rows = [
  createData("Muruganantham", "admin", "murugan@gmail.com"),
  createData("Ramany", "trainer", "ramany@gmail.com"),
  createData("kaliyappan", "web developer", "kaliyappan@gmail.com"),
  createData("varsha", "python developer", "varsha@gmail.com"),
  createData("------------", "-------------", "---------"),
];

function AdminDashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        padding: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography sx={{ fontSize: 25, fontWeight: 700 }}>
          Admin Dashboard
        </Typography>
  
      </Box>

      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid container item xs={12} md={8} spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ minHeight: 200 }}>
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
            <Grid item xs={12} md={6}>
              <Card sx={{ minHeight: 200 }}>
                <CardContent>
                  <Typography variant="h6">Daily - Timesheets</Typography>
                  <Grid container spacing={2} alignItems="center" mt={0.5}>
                    <Grid container my={1} sx={12}>
                      <Grid
                        item
                        xs={4}
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                      >
                        <Grid item>
                          <UpdateIcon fontSize="large" />
                        </Grid>
                        <Grid item >
                          <Typography variant="h6">8</Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                      >
                        <Grid item>
                          <TaskAltIcon fontSize="large" />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6">2</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item pl={2} xs={3}>
                      <Typography
                        sx={{ fontSize: 12, fontWeight: "500", color: "gray" }}
                      >
                        Pending TS
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", justifyContent: "space-evenly" }}
                    >
                      <Typography
                        sx={{ fontSize: 12, fontWeight: "500", color: "gray" }}
                      >
                        Updated TS
                      </Typography>
                    </Grid>
                  </Grid>
                  <CardActions sx={{ mt: 1 }}>
                    <Link to="/admin-timesheets">
                      <Button size="small" color="success">
                        View Timesheets
                      </Button>
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Contact</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>{row.contact}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={4} lg={3} xl={3} spacing={2} >
            <Grid item xs={12}>
              <Card sx={{height: "70vh"}}>
                <CardContent>
                  <Timesheetentry name="kaliyappan" buttonText="View" />
                  <Timesheetentry name="Varsha" buttonText="View" />
                  <Timesheetentry name="muruganantham" buttonText="View" />
                  <Timesheetentry name="ramany" buttonText="View" />
                  <Timesheetentry name="rahuman" buttonText="View" />
                  <Timesheetentry name="Maheshwari" buttonText="View" />

                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}

export default AdminDashboard;
