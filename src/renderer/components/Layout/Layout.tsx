import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.scss';
import Sidebar from '../Sidebar/Siderbar';

export interface iLayoutProps {}
const Layout: React.FC<iLayoutProps> = () => {
  return (
    <div className="layout-container">
      <div className="layout-header">
        <Header />
      </div>
      {/* <div className="layout-sidebar">

      </div> */}
      <div className="layout-content">
        <Sidebar />
        <Outlet />
      </div>
      {/* <div className="layout-footer">footer</div> */}
    </div>
  );
};

export default Layout;
