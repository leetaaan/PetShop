import React from "react";
import "../styles/dashboard.css";
import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="revenue__box">
              <h5>Total Sales</h5>
              <span>6320</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="orders__box">
              <h5>Total Orders</h5>
              <span>890</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="products__box">
              <h5>Total Products</h5>
              <span>{products.length}</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="users__box">
              <h5>Total Users</h5>
              <span>{users.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
