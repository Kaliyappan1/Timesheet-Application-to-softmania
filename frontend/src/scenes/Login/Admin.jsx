import React, { useEffect, useState } from "react";
import "../../assets/styles/Admin.css";
import { Box, Card, Checkbox, TextField, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "../../components/Theme";

function Admin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("admin");
    if (storedUser) {
      history("/admin-Dashboard");
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

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response text:", errorText);
        throw new Error(errorText);
      }

      const data = await response.json();
      if (data.message === "Login successful") {
        localStorage.setItem("admin", JSON.stringify(data.user));
        history("/admin-Dashboard");

        return;
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error during adminLogin:", error.message);
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
      </ThemeProvider>
    </div>
  );
}

export default Admin;
