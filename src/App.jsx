import  'react'
import './assets/styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./scenes/global/Header";
import Home from "./scenes/home/Home";
import Login from "./scenes/Login/Login";
import Signup from "./scenes/Login/Signup";
import Admin from "./scenes/Login/Admin";
import Form from "./scenes/form/Form";
import AdminDashboard from "./scenes/dashboard/AdminDashboard";
import AdminTimesheets from "./scenes/dashboard/AdminTimesheets";
import AdminSidebar from "./scenes/dashboard/Sidebar";
import AdminTeams from "./scenes/dashboard/AdminTeams";


function App() {
  
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
    
  )
}

export default App
