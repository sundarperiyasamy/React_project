
import React from 'react';
import { Outlet } from 'react-router-dom';
import Adminpage from './Adminpage';

const AdminLayout = () => {
  return (
    <div className='d-flex'>
      <div className='col-auto'>
        <Adminpage />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
 

export default AdminLayout;
