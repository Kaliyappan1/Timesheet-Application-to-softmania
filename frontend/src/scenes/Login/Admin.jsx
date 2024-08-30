import React, { useEffect, useState } from "react";
import "../../assets/styles/Admin.css";
import { Box, Card, Checkbox, TextField, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "../../components/Theme";
import SnackbarAlert from "../../components/customAlert";

function Admin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const history = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("admin");
    if (storedUser) {
      setTimeout(() =>{

        history("/admin-Dashboard");
      }, 500)
      setSnackbarMessage("Navigating Admin Dashboard.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    }
  }, [history]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const adminHandle = async () => {
    try {
      const { email, password } = formData;

      // Perform login with MongoDB
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.message === "Login successful") {
        localStorage.setItem("admin", JSON.stringify(data.user));
        setTimeout(() => {
          history("/admin-Dashboard");
        }, 500)
        setSnackbarMessage("Admin login successfully.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        return;
      } else {
        console.log(data.message);
        setSnackbarMessage("Your credentials please currectly enter.");
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error during adminLogin:", error.message);
      setSnackbarMessage("Error during admin Login.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="admin">
      <ThemeProvider theme={theme}>
        <Card sx={{ p: 5 }}>
          <div className="admin-login-container">
            <h2 className="admin-headline">Admin SignIn</h2>
            <h6 className="admin-subline ">
              manage your business Powerful admin tools
            </h6>
            <Box
              component="form"
              sx={{
                mt: 2,
                "& .MuiTextField-root": {
                  m: 1,
                  width: "25ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </Box>
            <div className="admin-custamized-space">
              <Checkbox color="success" />
              <p className="admin-remember">Remember me</p>
            </div>
            <div className="admin-button">
              <button className="button-33" role="button" onClick={adminHandle}>
                Go Dashboard
              </button>
            </div>
          </div>
        </Card>
        <SnackbarAlert
          open={snackbarOpen}
          message={snackbarMessage}
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        />
      </ThemeProvider>
    </div>
  );
}

export default Admin;
