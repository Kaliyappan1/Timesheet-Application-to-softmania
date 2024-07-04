import React from "react";
import "./Login.css";
import { Box, Button, Card, Checkbox, TextField } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
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
              color="success"
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              color="success"
              size="small"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              color="success"
              size="small"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              color="success"
              size="small"
              id="outlined-basic"
              label="re-password"
              variant="outlined"
            />
          </div>
        </Box>
        <div className="login-custamized-space">
          <Checkbox color="success" />
          <p className="login-remember">Remember me</p>
          <Link to="forget-password">
            <p className="login-forgetPassword">forget password</p>
          </Link>
        </div>
        <div className="login-button-center">
          <div>
            <Link to="/login">
              <h6 className="login-subline">
                Or{" "}
                <span className="signup-navigate-link">
                  Already you have account
                </span>
              </h6>
            </Link>
          </div>
          <Button
            sx={{
              backgroundColor: (theme) => theme.palette.success.light,
              pl: 8,
              pr: 8,
              pb: 1,
              pt: 1,
              mt: 3,
              mb: 2,
            }}
            variant="contained"
            size="contained"
            color="success"
          >
            SignIn
          </Button>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default Login;
