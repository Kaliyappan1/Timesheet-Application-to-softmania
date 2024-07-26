import React from "react";
import "../../assets/styles/Sidebar.css";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Route, Routes } from "react-router-dom";
import AdminDashboard from "../dashboard/AdminDashboard";
import { Box } from "@mui/material";
import AdminTimesheets from "../dashboard/AdminTimesheets";
import AdminTeams from "../dashboard/AdminTeams";

function AdminSidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
 
  return (
  

      <Sidebar
        
        collapsedWidth="65px"
        width="220px"
        style={{ backgroundColor: "darkgreen", border: "none"}}
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
