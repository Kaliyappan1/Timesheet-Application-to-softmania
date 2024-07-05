import React from "react";
import "./Sidebar.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function AdminSidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar-content">
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
              component={<Link to="adminDashboard" />}
              icon={<DashboardIcon sx={{ fontSize: 28 }} />}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              component={<Link to="adminTimesheets" />}
              icon={<AccessTimeIcon sx={{ fontSize: 28 }} />}
            >
              {" "}
              Timesheet
            </MenuItem>
            <MenuItem
              component={<Link to="adminTeams" />}
              icon={<GroupsIcon sx={{ fontSize: 28 }} />}
            >
              {" "}
              Teams
            </MenuItem>
            <MenuItem
              component={<Link to="logout" />}
              icon={<LogoutIcon sx={{ fontSize: 28 }} />}
            >
              {" "}
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      <main style={{ padding: 5 }}>
        <button className="sb-button" onClick={() => setCollapsed(!collapsed)} >
          <ArrowBackIosNewIcon/>
        </button>
        

      </main>
    </div>
  );
}

export default AdminSidebar;
