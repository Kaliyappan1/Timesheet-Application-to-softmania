import React, { useEffect, useState } from "react";
import "../../assets/styles/Login.css";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Theme from "../../components/Theme";
import { auth, googleAuthProvider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import SnackbarAlert from "../../components/customAlert";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  // snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const history = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      setTimeout(() => {
        history("/form");
      }, 500);
    }
  }, [history]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (formData.password !== formData.rePassword) {
      setSnackbarMessage("Passwords do not match.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
  
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (!response.ok) {  // Check if response is not successful
        const errorData = await response.json();  // Parse the error response
        console.log("Error response:", errorData);  // Log the error response for debugging
        setSnackbarMessage(`Signup error: ${errorData.message || 'Failed to signup'}`);
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
        return;
      }
  
      const data = await response.json(); // Parse success response
  
      if (data.message === "User created successfully") {
        localStorage.setItem("users", JSON.stringify(data.user));
  
        setSnackbarMessage("Signup successful.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setTimeout(() => {
          history("/form");
        }, 500);
      } else {
        setSnackbarMessage("Error during signup. Please try again.");
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setSnackbarMessage(
        "Network error during signup. Please try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };
  
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;

      // Save credential locally
      localStorage.setItem(
        "users",
        JSON.stringify({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );

      setSnackbarMessage("Google Authentication successfully.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setTimeout(() => {
        history("/form");
      }, 500);
    } catch (error) {
      console.log("Signup Error :", error);
      setSnackbarMessage("Error during Google Login. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="login">
      <ThemeProvider theme={Theme}>
        <Card sx={{ p: 5, maxWidth: 400, maxHeight: 600 }}>
          <h2 className="login-headline">SignUp</h2>

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
            <Box textAlign="center">
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleSignup}
                sx={{
                  pb: 1,
                  pt: 1,
                  mt: 2,
                  mb: 1,
                }}
              >
                Sign up with Google
              </Button>
            </Box>
            <Divider variant="middle" flexItem>
              Or
            </Divider>
            <div>
              <TextField
                size="small"
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                size="small"
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
                size="small"
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                size="small"
                id="rePassword"
                name="rePassword"
                label="Re-password"
                variant="outlined"
                type="password"
                value={formData.rePassword}
                onChange={handleChange}
              />
            </div>
          </Box>

          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox />
            <Typography>Remember me</Typography>
          </Box> */}

          <div className="login-button-center">

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mt: 2, mb:2}}>
                  Already have an account?
                  <br />
                  <Link to="/login">
                    <span className="signup-navigate-link">click here</span>
                  </Link>
                </Typography>
              </Box>

            <Button
              fullWidth
              sx={{
                pb: 1,
                pt: 1,
                mt: 1,
              }}
              variant="contained"
              size="contained"
              onClick={handleSignup}
            >
              SignUp
            </Button>
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
