import React from "react";
import "../../assets/styles/Login.css";
import { Box, Button, Card, Checkbox, TextField, ThemeProvider } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import theme from "../../components/Theme";


function Login() {
  return (
    <div className="login">
      <ThemeProvider theme={theme}>

      <Card sx={{ p: 5, maxWidth: 500, maxHeight: 600 }}>
        <h2 className="login-headline">Signin to your account</h2>
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
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </div>
          <div>
            <TextField
           
              id="outlined-basic"
              label="Password"
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
        <div className="login-button-center">

        <Link to="/signup">
        <h6 className="login-subline">Or <span className="signup-navigate-link">sign up for a new account</span></h6>
          </Link>

        <Button
          sx={{ pl: 8, pr: 8, pb: 1, pt: 1, mt: 3,mb:2 }}
          variant="contained"
          
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
      </ThemeProvider>
    </div>
  )
}

export default Login;
