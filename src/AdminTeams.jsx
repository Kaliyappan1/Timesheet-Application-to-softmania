import React from "react";
import "./assets/styles/AdminTimesheets.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/Theme";
import {
  Avatar,
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function createData(name, role, contact) {
  return { name, role, contact };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
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
  // string to avatar end

  return (
    <div className="adminTeams">
      <ThemeProvider theme={theme}>
        <div className="admin-Header">
          {/* admin header line */}
          <div>
            <Typography sx={{ fontSize: 25, fontWeight: 700, ml: 2 }}>
              Teams
            </Typography>
          </div>
          <div>
            <Avatar {...stringAvatar("Kali")} />
          </div>
        </div>
        <div className="admin-search">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search google maps" }}
            />

            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="adminTeamTable">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow >
                  <TableCell sx={{pr: 5, pl:5}}>Name</TableCell>
                  <TableCell sx={{pr: 5, pl:5}} align="right">Role</TableCell>
                  <TableCell sx={{pr: 5, pl:5}} align="right">Contact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{pr: 5, pl:5}}>
                      {row.name}
                    </TableCell>
                    <TableCell sx={{pr: 5, pl:5}} align="right">{row.role}</TableCell>
                    <TableCell sx={{pr: 5, pl:5}} align="right">{row.contact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="adminTeamPagination">
          <Stack spacing={2}>
            <Pagination sx={{backgroundColor: "secondary.light", borderRadius:5, p:1}} color="primary" count={4} variant="outlined"/>
          </Stack>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default AdminTeams;
