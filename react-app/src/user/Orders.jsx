import React from "react";
import Layout from "../components/Layout/Layout";
import UserMenu from "../components/Layout/UserMenu";
const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid py-4 p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
            <div className="col-md-9">
              <h1>All Orders</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
