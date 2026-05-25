import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./MyOrders.css";
import Navbar from "../Navbar/Navbar";
import shake from "../../assets/icons/Shake.png";

const tabs = ["Active", "Completed", "Cancelled"];

const ordersData = {
  Active: [
    {
      id: 1,
      img: shake,
      name: "Strawberry Shake",
      date: "29 Nov, 01:20 pm",
      price: "$20.00",
      items: "2 items",
      status: "active",
    },
  ],
  Completed: [
    {
      id: 2,
      img: shake,
      name: "Chicken Curry",
      date: "29 Nov, 01:20 pm",
      price: "$50.00",
      items: "2 items",
      status: "completed",
    },
    {
      id: 3,
      img: shake,
      name: "Bean and Vegetable Burger",
      date: "10 Nov, 06:05 pm",
      price: "$50.00",
      items: "2 items",
      status: "completed",
    },
    {
      id: 4,
      img: shake,
      name: "Coffee Latte",
      date: "10 Nov, 08:30 am",
      price: "$8.00",
      items: "1 item",
      status: "completed",
    },
    {
      id: 5,
      img: shake,
      name: "Strawberry Cheesecake",
      date: "03 Oct, 03:40 pm",
      price: "$22.00",
      items: "2 items",
      status: "completed",
    },
  ],
  Cancelled: [
    {
      id: 6,
      img: shake,
      name: "Sushi Wave",
      date: "02 Nov, 04:00 pm",
      price: "$103.00",
      items: "3 items",
      status: "cancelled",
    },
    {
      id: 7,
      img: shake,
      name: "Fruit and Berry Tea",
      date: "12 Oct, 03:15 pm",
      price: "$15.00",
      items: "2 items",
      status: "cancelled",
    },
  ],
};

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const navigate = useNavigate();
  const orders = ordersData[activeTab];

  return (
    <div className="mo-screen">
      <div className="mo-card">

        <div className="mo-header">
          <button className="mo-back" onClick={() => navigate('/home')}>‹</button>
          <h2 className="mo-header-title">My Orders</h2>
        </div>

        <div className="mo-body">

          <div className="mo-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`mo-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {orders.length === 0 ? (
            <div className="mo-empty">
              <div className="mo-empty-icon">
                <svg viewBox="0 0 100 100" fill="none">
                  <rect x="20" y="10" width="60" height="75" rx="8" stroke="#f0b8a0" strokeWidth="4"/>
                  <line x1="35" y1="30" x2="65" y2="30" stroke="#f0b8a0" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="35" y1="45" x2="65" y2="45" stroke="#f0b8a0" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="35" y1="60" x2="50" y2="60" stroke="#f0b8a0" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="mo-empty-text">
                You dont have any {activeTab.toLowerCase()} orders at this time
              </p>
            </div>
          ) : (
            <div className="mo-list">
              {orders.map((order) => (
                <div className="mo-order-card" key={order.id}>
                  <img src={order.img} alt={order.name} className="mo-order-img" />
                  <div className="mo-order-info">
                    <div className="mo-order-top">
                      <span className="mo-order-name">{order.name}</span>
                      <span className="mo-order-price">{order.price}</span>
                    </div>
                    <div className="mo-order-mid">
                      <span className="mo-order-date">{order.date}</span>
                      <span className="mo-order-items">{order.items}</span>
                    </div>

                    {order.status === "completed" && (
                      <span className="mo-status delivered">✓ Order delivered</span>
                    )}
                    {order.status === "cancelled" && (
                      <span className="mo-status cancelled">✕ Order cancelled</span>
                    )}

                    <div className="mo-order-actions">
                      {order.status === "active" && (
                        <>
                          <button className="mo-btn-cancel" onClick={() => navigate("/Cancel")}>
                            Cancel Order
                          </button>
                          <button className="mo-btn-track" onClick={()=> navigate("/TrackOrder")}>Track Driver</button>
                        </>
                      )}
                      {order.status === "completed" && (
                        <>
                          <button className="mo-btn-review" onClick={() => navigate("/leave-review", { state: { order } })}>
                            Leave a review
                          </button>
                          <button className="mo-btn-again">Order Again</button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        <Navbar />
      </div>
    </div>
  );
};

MyOrders.propTypes = {
  children: PropTypes.node,
};

export default MyOrders;