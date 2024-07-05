import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'


function AdminDashboard() {
  return (
    <div className='adminDashboard'>
        <div className="sidbar">
            <Sidebar/>
        </div>
        <div className="admin-content">
            <h1>admin content</h1>
        </div>
    </div>
  )
}

export default AdminDashboard