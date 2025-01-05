import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "./../../components/AdminMenu";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <h1>Admin Dashboard</h1>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Admin Name:{auth?.user?.name}</h3>
              <h3>Admin Email:{auth?.user?.email}</h3>
              <h3>Admin Contact:{auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
