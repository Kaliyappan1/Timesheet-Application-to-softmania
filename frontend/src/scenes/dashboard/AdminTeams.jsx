import React from "react";
import "../../assets/styles/AdminTimesheets.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../../components/Theme";
import {
  Avatar,
  Button,
  IconButton,
  InputBase,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AdminSidebar from "../global/Sidebar";

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

function AdminTeams() {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <ThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontSize: 25, fontWeight: 700 }}>
                Teams
              </Typography>
              <Avatar sx={{ backgroundColor: "green" }}>K</Avatar>
            </Grid>

            <Grid item xs={6} md={4}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search teams" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              display="flex"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "#004201",
                    boxShadow: "none",
                  },
                  "&:active": {
                    boxShadow: "none",
                    backgroundColor: "green",
                  },
                }}
                variant="contained"
              >
                + Add Team
              </Button>
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

            <Grid item xs={12} display="flex" justifyContent="center">
              <Stack spacing={2}>
                <Pagination
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    p: 1,
                  }}
                  color="primary"
                  count={4}
                  variant="contained"
                />
              </Stack>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default AdminTeams;
