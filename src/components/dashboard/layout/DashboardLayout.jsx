import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import '../../../styles/DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="main-section">
        <Sidebar />
        <div className="main-content">
          <Outlet />  {/* Aquí se renderizan las diferentes páginas */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
