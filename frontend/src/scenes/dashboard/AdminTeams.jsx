import React, { useState, useEffect } from "react";
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
  Modal,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';

function createData(id, name, role, contact) {
  return { id, name, role, contact };
}

function AdminTeams() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [newTeam, setNewTeam] = useState({ name: '', role: '', contact: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 9;

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('/api/teams');
        setRows(response.data.map(team => createData(team._id, team.name, team.role, team.contact)));
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeams();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/teams/add', newTeam);
      setRows([...rows, createData(response.data.name, response.data.role, response.data.contact)]);
      handleClose();
    } catch (error) {
      console.error('Error adding new team member:', error);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIdx = (currentPage - 1) * rowsPerPage;
  const currentRows = rows.slice(startIdx, startIdx + rowsPerPage);

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
                onClick={handleOpen}
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
                    {currentRows.map((row) => (
                      <TableRow
                        key={row.id}
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
                  count={Math.ceil(rows.length / rowsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Stack>
            </Grid>
          </Grid>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-team-modal"
            aria-describedby="add-team-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                borderRadius: 1,
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="add-team-modal" variant="h6" component="h2">
                Add Team Member
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  value={newTeam.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Role"
                  name="role"
                  value={newTeam.role}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Contact"
                  name="contact"
                  value={newTeam.contact}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Add
                </Button>
              </form>
            </Box>
          </Modal>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default AdminTeams;
