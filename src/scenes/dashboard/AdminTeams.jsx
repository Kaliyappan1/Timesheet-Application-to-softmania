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
              <Avatar {...stringAvatar("Kali")} />
            </Grid>

            <Grid item xs={12} md={8}>
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
              md={4}
              display="flex"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <Button sx={{ color: "secondary.light" }} variant="contained">
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
                    backgroundColor: "secondary.light",
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
