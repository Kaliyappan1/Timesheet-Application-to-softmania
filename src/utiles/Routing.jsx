import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Login from "../Login";
import Signup from "../Signup";
import Admin from "../Admin";
import Form from "../Form";
import AdminDashboard from "../AdminDashboard";
import AdminTimesheets from "../AdminTimesheets";
import AdminSidebar from "../Sidebar";

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
              <AdminSidebar/>
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
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
