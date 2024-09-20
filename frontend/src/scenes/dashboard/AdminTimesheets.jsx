import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
  ThemeProvider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "../../components/Theme";
import axios from "axios";
import SnackbarAlert from "../../components/customAlert";
import { TbReportAnalytics } from "react-icons/tb";
import ReportPopupDialog from "../../components/ReportPopupDialog";

function AdminTimesheets() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rows, setRows] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    date: "",
    attendance: "",
    workHours: "",
    topics: "",
    description: "",
  });

  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Show 10 rows per page by default

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => setSnackbarOpen(false);

  // Fetch data from MongoDB
  useEffect(() => {
    const fetchTimesheets = async () => {
      try {
        const response = await axios.get("/api/forms/timesheets");
        setRows(
          response.data.map((timesheet) => ({
            id: timesheet._id,
            name: timesheet.name,
            date: new Date(timesheet.date).toISOString().split("T")[0],
            attendance: timesheet.attendance,
            workHours: timesheet.workHours,
            topics: timesheet.topics,
            reason: timesheet.reason,
            description: timesheet.description,
          }))
        );
        setSnackbarMessage("Fetched timesheet data successfully.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      } catch (err) {
        console.error("Failed to fetch timesheets:", err);
        setSnackbarMessage("Failed fetching timesheet data");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    };

    fetchTimesheets();
  }, []);

  // Handle edit action
  const handleEdit = (row) => {
    setEditData(row);
    setOpenEdit(true);
  };

  // Handle save action
  const handleSave = async () => {
    try {
      await axios.put(`/api/forms/timesheets/${editData.id}`, editData);
      setRows(rows.map((row) => (row.id === editData.id ? editData : row)));
      setSnackbarMessage("Timesheet has been updated successfully.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setOpenEdit(false);
    } catch (err) {
      console.error("Failed to save timesheet:", err);
      setSnackbarMessage("Failed to Save timesheet.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  // Handle delete action with confirmation
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this timesheet?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`/api/forms/timesheets/${id}`);
        setRows(rows.filter((row) => row.id !== id));
        setSnackbarMessage("Timesheet was successfully deleted");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      } catch (err) {
        console.error("Failed to delete timesheet:", err);
        setSnackbarMessage("Failed deleting timesheet.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Update the rows per page
    setPage(0); // Reset to the first page whenever rowsPerPage changes
  };

  // Calculate the rows to display based on pagination
  const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: 25, fontWeight: 700 }}>Timesheets</Typography>
          </Grid>

          <Grid item xs={6} md={4}>
            <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." inputProps={{ "aria-label": "search teams" }} />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} display="flex" justifyContent={{ xs: "flex-start", md: "flex-end" }}>
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
              onClick={handleOpen}
            >
              <TbReportAnalytics size={24} style={{ margin: 5 }} />
              Generate Report
            </Button>
            <ReportPopupDialog open={open} handleClose={handleClose} />
          </Grid>
        </Grid>

        <ThemeProvider theme={theme}>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell> {/* Dynamic numbering */}
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Attendance</TableCell>
                      <TableCell>Work Hours</TableCell>
                      <TableCell>Topics</TableCell>
                      <TableCell>Reason</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedRows.map((row, index) => (
                      <TableRow key={row.id}>
                        {/* Incremental row number based on page */}
                        <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.attendance}</TableCell>
                        <TableCell>{row.workHours}</TableCell>
                        <TableCell>{row.topics}</TableCell>
                        <TableCell>{row.reason}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell>
                          <IconButton color="primary" onClick={() => handleEdit(row)}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton color="error" onClick={() => handleDelete(row.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Pagination Component */}
              <TablePagination
                component="div"
                count={rows.length} // Total rows count
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 15, 20]} // Optional: specify rows per page options
              />
            </Paper>
          </Grid>
      

        {/* Edit Dialog */}
        <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
          <DialogTitle>Edit Timesheet</DialogTitle>
          <DialogContent sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth name="name" label="Name" value={editData.name} onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="date" label="Date" type="date" value={editData.date} onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="attendance" label="Attendance" value={editData.attendance} onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="workHours" label="Work Hours" value={editData.workHours} onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="topics" label="Topics" value={editData.topics} onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="description" label="Description" value={editData.description} onChange={handleChange} />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
    </ThemeProvider>

        {/* Snackbar for notifications */}
        <SnackbarAlert open={snackbarOpen} onClose={handleSnackbarClose} message={snackbarMessage} severity={snackbarSeverity} />
      </Box>
    </Box>
  );
}

export default AdminTimesheets;
