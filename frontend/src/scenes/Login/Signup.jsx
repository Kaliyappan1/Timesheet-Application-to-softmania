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
import { signInWithPopup} from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const history = useNavigate();

  useEffect(() => {
    
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      history("/form");
    }

  }, [history]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (formData.password !== formData.rePassword) {
      console.error("Passwords do not match");
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

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response text:", errorText);
        throw new Error(errorText);
      }

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Failed to parse JSON:", e);
        throw new Error("Invalid response format");
      }

      if (data.message === "User created successfully") {
        localStorage.setItem("users", JSON.stringify(data.user));
        history("/form");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
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

      // Optional: Handle further actions with the user data
      // e.g., redirecting or updating the MongoDB user data

      history("/form");
    } catch (error) {
      console.error("Error during Google signup:", error.message);
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

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox />
            <Typography>Remember me</Typography>
          </Box>

          <div className="login-button-center">
            <div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                Or{" "}
                <Link to="/login">
                  <Typography className="signup-navigate-link">
                    Already have an account?
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
              onClick={handleSignup}
            >
              SignUp
            </Button>

            <Divider variant="middle" flexItem>
              Or
            </Divider>

            <Button
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
          </div>
        </Card>
      </ThemeProvider>
    </div>
  );
}
