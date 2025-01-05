import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center ">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item text-general-color bg-general-secondary"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item text-general-color bg-general-secondary"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/Product"
            className="list-group-item text-general-color bg-general-secondary"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item text-general-color bg-general-secondary"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
