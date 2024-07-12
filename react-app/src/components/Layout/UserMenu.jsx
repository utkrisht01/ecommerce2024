import React from 'react'
import { NavLink } from 'react-router-dom'
const UserMenu = () => {
  return (
    <>
   <div className="text-center ">
   <div className="list-group">
    <h4>Dashboard</h4>
  <NavLink to="/dashboard/user/profile" className="list-group-item-action">
    Profile
    </NavLink>
  <NavLink to="/dashboard/admin/create-product"className="list-group-item-action">
   Order
    </NavLink>
</div>
</div>
    </>
  );
};

export default UserMenu;