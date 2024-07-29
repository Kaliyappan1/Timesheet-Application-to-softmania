import React, { useState } from "react";
import "../../assets/styles/Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

function AdminSidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  

  return (
  
        <Sidebar
        transitionDuration={500}
        collapsedWidth="65px"
        backgroundColor="#0C1C17"
        rootstyles={{border: 0}}
        width="220px" 
        collapsed={collapsed}
        >
      
        <Menu style={{ display: "flex", alignContent: "center" }}>
          <MenuItem
            className="menu1"
            icon={<MenuIcon onClick={() => setCollapsed(!collapsed)} />}
          >
            <h2>Softmania</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="/admin-Dashboard" />}
            icon={<DashboardIcon />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link to="/admin-Timesheets" />}
            icon={<AccessTimeFilledIcon />}
          >
            Timesheets
          </MenuItem>
          <MenuItem
            component={<Link to="/admin-Teams" />}
            icon={<GroupsIcon />}
          >
            Teams
          </MenuItem>
          <MenuItem component={<Link to="/" />} icon={<LogoutIcon />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    
   
  );
}

export default AdminSidebar;
