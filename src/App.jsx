import 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/App.css'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Admin from './Admin'
import Form from './Form'
import AdminDashboard from './AdminDashboard'
import AdminSidebar from './Sidebar'


function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={
      <>
      <Header/>
      <Home/>
      </>
    } />
    <Route path='/login' element={
      <>
      <Header/>
      <Login/>
      </>
    } />
    <Route path='/signup' element={
      <>
      <Header/>
      <Signup/>
      </>
    } />
    <Route path='/admin' element={
      <>
      <Header/>
      <Admin/>
      </>
    } />
    <Route path='/form' element={
      <>
      <Header/>
      <Form/>
      </>
    } />
    <Route path='/admin-dashboard' element={
      <>
      <Header/>
      <AdminDashboard/>
      </>
    } />

    
   </Routes>
   </BrowserRouter>
  )
}

export default App
