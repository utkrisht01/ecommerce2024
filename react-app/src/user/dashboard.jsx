import React from "react";
import Layout from "../components/Layout/Layout";
import UserMenu from "../components/Layout/UserMenu";
import { useAuth } from "../context/auth";
const Dashboard = () => {
  const [auth]=useAuth();
  return (
    <Layout title={"Dashboard - Purvanchal Bites"}>
     <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          { <UserMenu/> }
          <h1>I am user dahboard</h1>
        </div>
        <div className="col-md-9">

  { <div className="card w-75 p-3">
    <h3>{auth?.user?.name}</h3>
    <h3>{auth?.user?.email}</h3>
    <h3>{auth?.user?.address}</h3>
  </div> }
        </div>
      </div>
     </div>

    </Layout>
  );
};

export default Dashboard;