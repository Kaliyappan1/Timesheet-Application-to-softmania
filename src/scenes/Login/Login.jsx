import React, { useEffect } from "react";
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

export default function Signup() {
  const history = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("employes");
    if (storedUser) {
      history("/form");
    }
  }, [history]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;

      // save credintial locally
      localStorage.setItem(
        "employes",
        JSON.stringify({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
    } catch (error) {
      console.error("Error during login:");
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
              <TextField id="outlined-basic" label="email" variant="outlined" />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
              />
            </div>
          </Box>
          <div className="login-custamized-space">
            <Checkbox />
            <p className="login-remember">Remember me</p>
            <Link to="forget-password">
              <p className="login-forgetPassword">forget password</p>
            </Link>
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
                Dont't have account ? <br />
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
            >
              Login
            </Button>

            <Divider  variant="middle" flexItem >Or</Divider>
            <Button
              startIcon={<GoogleIcon />}
              variant="outlined"
              onClick={handleLogin}
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
      </ThemeProvider>
    </div>
  );
}
