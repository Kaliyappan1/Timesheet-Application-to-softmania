import React, { useState } from "react";
import "./assets/styles/Sidebar.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className="sidebar">
      <div className="sidebar-content">
      <button  onClick={() => setCollapsed(!collapsed)} >
          <ArrowBackIosNewIcon/>
        </button>
        <Sidebar
          width="200px"
          collapsed={collapsed}
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "#2E7D32",
              color: "#fff",
              fontWeight: 900,
              fontSize: 20,
            },
          }}
        >
          <Menu>
            <MenuItem
              component={<Link to="/admin-dashboard" />}
              icon={<DashboardIcon sx={{ fontSize: 28 }} />}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              component={<Link to="/admin-Timesheets" />}
              icon={<AccessTimeIcon sx={{ fontSize: 28 }} />}
            >
              
              Timesheet
            </MenuItem>
            <MenuItem
              component={<Link to="/admin-Teams" />}
              icon={<GroupsIcon sx={{ fontSize: 28 }} />}
            >
              
              Teams
            </MenuItem>
            <MenuItem
              component={<Link to="/logout" />}
              icon={<PowerSettingsNewIcon sx={{ fontSize: 28 }} />}
            >
              
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      
    </div>
  );
}

export default AdminSidebar;
