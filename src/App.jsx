import "react";
import "./assets/styles/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./scenes/global/Header";
import Home from "./scenes/home/Home";
import Login from "./scenes/Login/Login";
import Signup from "./scenes/Login/Signup";
import Admin from "./scenes/Login/Admin";
import Form from "./scenes/form/Form";
import AdminSidebar from "./scenes/global/Sidebar";

import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";
import AdminDashboard from "./scenes/dashboard/AdminDashboard";
import AdminTimesheets from "./scenes/dashboard/AdminTimesheets";
import AdminTeams from "./scenes/dashboard/AdminTeams";

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <Signup />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <Header />
                <Admin />
              </>
            }
          />
          <Route
            path="/form"
            element={
              <>
                <Header />
                <Form />
              </>
            }
          />
          <Route
            path="/admin-Dashboard"
            element={
              <div
                className="AdminSidebar"
                style={{ display: "flex", height: "100vh" }}
              >
                <AdminSidebar />
                <AdminDashboard />
              </div>
            }
          />
          <Route
            path="/admin-Timesheets"
            element={
              <div
                className="AdminSidebar"
                style={{ display: "flex", height: "100vh" }}
              >
                
                <AdminSidebar />
                <AdminTimesheets />
              </div>
            }
          />
          <Route
            path="/admin-Teams"
            element={
              <div
                className="AdminSidebar"
                style={{ display: "flex", height: "100vh" }}
              >
                <AdminSidebar />
                <AdminTeams />
              </div>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
