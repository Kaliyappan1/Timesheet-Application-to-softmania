import React from "react";
import "../../assets/styles/Sidebar.css";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import AdminDashboard from "../dashboard/AdminDashboard";
import { Box } from "@mui/material";

function AdminSidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
 
  return (
    
   
  <Box>

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
            component={<Link to="/admin-timesheets" />}
            icon={<AccessTimeFilledIcon />}
          >
            Timesheets
          </MenuItem>
          <MenuItem
            component={<Link to="/admin-teams" />}
            icon={<GroupsIcon />}
          >
            Teams
          </MenuItem>
          <MenuItem component={<Link to="/" />} icon={<LogoutIcon />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
  </Box>
    
   
  );
}

export default AdminSidebar;
