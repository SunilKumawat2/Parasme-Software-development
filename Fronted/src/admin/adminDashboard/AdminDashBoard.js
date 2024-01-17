import React from 'react'
import { useNavigate } from 'react-router-dom';
import AdminSideNav from './sidenav/AdminSideNav';

const AdminDashBoard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Remove the 'login' item from localStorage
        localStorage.removeItem('login');
    
        // Navigate to AdminLogin
        navigate('/AdminLogin');
      };
  return (
    <div>
       <AdminSideNav/>
       <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
       </div>
    
  )
}

export default AdminDashBoard