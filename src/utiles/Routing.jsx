import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import Admin from "../Login/Admin";
import Form from "../Form";
import AdminDashboard from "../Dashboard/AdminDashboard";
import AdminTimesheets from "../Dashboard/AdminTimesheets";
import AdminSidebar from "../Dashboard/Sidebar";
import AdminTeams from "../Dashboard/AdminTeams";

function Routing() {
  return (
    <BrowserRouter>
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
          path="/admin-dashboard"
          element={
            <>

              <AdminDashboard />
            </>
          }
        />
        <Route
          path="/admin-timesheets"
          element={
            <>

              <AdminTimesheets />
            </>
          }
        />
        <Route
          path="/admin-teams"
          element={
            <>
              <AdminTeams />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
