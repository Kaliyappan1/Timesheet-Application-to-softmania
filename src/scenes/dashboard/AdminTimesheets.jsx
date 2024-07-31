import React from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../components/Theme";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 160 },
  {
    field: "age",
    headerName: "Date",
    width: 150,
  },
  { field: "attendence", headerName: "Attendence", width: 130 },
  { field: "workHours", type: "number", headerName: "Work Hours", width: 100 },
  { field: "topics", headerName: "Topics", width: 250 },
  { field: "description", headerName: "Description", width: 500 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    Name: "Jon",
    age: "10/07/2004",
    attendence: "present",
    workHours: 12,
    topics: "timesheet application web development",
    description:
      "timesheet application worked and javascript basics coved today",
  },
  {
    id: 2,
    lastName: "Lannister",
    Name: "Cersei",
    age: "10/07/2004",
    attendence: "present",
  },
  {
    id: 3,
    lastName: "Lannister",
    Name: "Jaime",
    age: "10/07/2004",
    attendence: "present",
  },
  {
    id: 4,
    lastName: "Stark",
    Name: "Arya",
    age: "10/07/2004",
    attendence: "present",
  },
  {
    id: 5,
    lastName: "Targaryen",
    Name: "Daenerys",
    age: "10/07/2004",
    attendence: "present",
  },
  {
    id: 6,
    lastName: "Melisandre",
    Name: "kaliyappan",
    age: "10/07/2004",
    attendence: "present",
  },
  {
    id: 7,
    lastName: "Clifford",
    Name: "Ferrara",
    age: "10/07/2004",
    attendence: "present",
  },
  {
    id: 8,
    lastName: "Frances",
    Name: "Rossini",
    age: "10/07/2004",
    attendence: "present",
  },
  {
    id: 9,
    lastName: "Roxie",
    Name: "Harvey",
    age: "10/07/2004",
    attendence: "present",
  },
];

function AdminTimesheets() {
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
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: 25, fontWeight: 700 }}>
              Timesheets
            </Typography>
            <Avatar {...stringAvatar("Kali")} />
          </Grid>

          <Grid item xs={4}>
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
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
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
          ></Grid>
        </Grid>
              {/* data grid */}
        <Grid item xs={5} sx={{mt: 5}} md={6} lg={8}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <div style={{ height: 550, width: "100%" }}>
              <DataGrid
                sx={{
                  boxShadow: 2,
                  "& .MuiDataGrid-cell:hover": {
                    borderColor: "success.light",
                    border: 1,
                  },
                }}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                }}
                pageSizeOptions={[10, 20, 40]}
                checkboxSelection
              />
            </div>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
}

export default AdminTimesheets;
