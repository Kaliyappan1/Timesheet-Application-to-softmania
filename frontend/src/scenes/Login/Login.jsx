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
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"; // Import signInWithEmailAndPassword
import GoogleIcon from "@mui/icons-material/Google";
import ForgetPassword from "../../components/ForgetPassword";
import SnackbarAlert from "../../components/customAlert";

export default function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const history = useNavigate();

  // snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const closeModal = () => {
    setShowForgotPassword(false);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      setTimeout(()=> {

        history("/form");
      }, 500);
    }
  }, [history]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const { email, password } = formData;

      // Perform login with MongoDB
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.message === "Login successful") {
        localStorage.setItem("users", JSON.stringify(data.user));
        setTimeout(() => {
          
          history("/form");
        }, 500);

        setSnackbarMessage("login successfully.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        return;
      } else {
        setSnackbarMessage("Error during Login. please try again.");
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage(
        "Network error during login. please after trying again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;

      // Save user credentials locally
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
      setSnackbarMessage("Error during Google Login. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="login">
      <ThemeProvider theme={Theme}>
        <Card sx={{ p: 5, maxWidth: 400, maxHeight: 600 }}>
          <h2 className="login-headline">Login</h2>

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
          <div className="login-custamized-space">
            <Checkbox />
            <Typography sx={{ fontSize: 14 }} startIcon={<Checkbox />}>
              Remember me
            </Typography>

            <Button onClick={handleForgotPassword} sx={{ fontSize: 12 }}>
              Forget password
            </Button>
          </div>
          <Box className="login-button-center">
            <div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                Don't have an account? <br />
                <Link to="/signup">
                  <Typography className="signup-navigate-link">
                    Please Signup
                  </Typography>
                </Link>
              </Box>
            </div>
            <Button
              sx={{
                pl: 8,
                pr: 8,
                pb: 1,
                pt: 1,
                mt: 3,
                mb: 1,
              }}
              variant="contained"
              size="contained"
              onClick={handleLogin}
            >
              Login
            </Button>

            <Divider variant="middle" flexItem>
              Or
            </Divider>
            <Button
              startIcon={<GoogleIcon />}
              variant="outlined"
              onClick={googleLogin}
              sx={{
                pb: 1,
                pt: 1,
                mt: 2,
                mb: 1,
              }}
            >
              Sign in with Google
            </Button>
          </Box>
        </Card>
        <ForgetPassword open={showForgotPassword} handleClose={closeModal} />
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
