import {
  AppBar,
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, Navigate } from "react-router-dom";
import theme from "../../components/Theme";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("users");
    setIsLoggedIn(!!user);
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("users");
    setIsLoggedIn(false);
    Navigate("/login");
    handleClose();
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Link to="/">
                  <Box
                    component="img"
                    sx={{
                      height: 32,
                    }}
                    alt="Softmania"
                    src={logo}
                  />
                </Link>
              </Box>
              <Link to="/">
                <Button
                  sx={{ color: "white", fontWeight: 600, pr: 2 }}
                  component="div"
                >
                  Home
                </Button>
              </Link>
              <Link to="/admin">
                <Button
                  sx={{ color: "white", fontWeight: 600, pr: 2 }}
                  component="div"
                >
                  Admin
                </Button>
              </Link>
              {isLoggedIn ? (
                <div>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      bgcolor: "white",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={handleClick}
                  ></Avatar>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    sx={{ mt: 2 }}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Link to="/login">
                  <Button
                    sx={{ color: "white", fontWeight: 600, pr: 2 }}
                    component="div"
                  >
                    Login
                  </Button>
                </Link>
              )}
  
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Header;
