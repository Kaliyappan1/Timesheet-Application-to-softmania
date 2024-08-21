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
import { Link, useNavigate } from "react-router-dom";
import theme from "../../components/Theme";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("users");
    setIsLoggedIn(!!user);
  });
  useEffect(() => {
    const admin = localStorage.getItem("admin");
    setAdminLoggedIn(!!admin);
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAdminClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAdminClose = () => {
    setAnchorE2(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("users");
    setIsLoggedIn(false);
    navigate("/login");
    handleClose();
  };
  const handleAdminLogout = () => {
    localStorage.removeItem("admin");
    setAdminLoggedIn(false);
    navigate("/admin");
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
              {adminLoggedIn ? (
                <div>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      mr: 2,
                      bgcolor: "white",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={handleAdminClick}
                  >
                    A
                  </Avatar>
                  <Menu
                    anchorEl={anchorE2}
                    open={Boolean(anchorE2)}
                    onClose={handleAdminClose}
                    sx={{ mt: 2 }}
                  >
                    <Link to="/admin-Dashboard">
                      <MenuItem>Dashboard</MenuItem>
                    </Link>

                    <MenuItem onClick={handleAdminLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Link to="/admin">
                  <Button
                    sx={{ color: "white", fontWeight: 600, pr: 2 }}
                    component="div"
                  >
                    Admin
                  </Button>
                </Link>
              )}
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
                  >
                    L
                  </Avatar>
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
