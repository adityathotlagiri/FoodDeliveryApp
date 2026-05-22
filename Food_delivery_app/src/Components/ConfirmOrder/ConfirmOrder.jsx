import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ConfirmOrder.css";
import Navbar from "../Navbar/Navbar";
import shake from "../../assets/icons/Shake.png";
import lasagna from "../../assets/icons/HomeIcons/lasagna.png";
import editIcon from "../../assets/icons/EditIcon.png";
import trashIcon from "../../assets/icons/Trashicon.png"

const initialItems = [
  {
    id: 1,
    img: shake,
    name: "Strawberry Shake",
    price: 20.00,
    date: "29 Nov, 15:20 pm",
    items: "2 items",
    qty: 2,
  },
  {
    id: 2,
    img: lasagna,
    name: "Broccoli Lasagna",
    price: 12.99,
    date: "29 Nov, 12:00 pm",
    items: "1 items",
    qty: 1,
  },
];

const TAX = 5.00;
const DELIVERY = 3.00;

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(initialItems);

  const increment = (id) => setItems(items.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  const decrement = (id) => setItems(items.map(i => i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal + TAX + DELIVERY;

  return (
    <div className="co2-screen">
      <div className="co2-card">

        <div className="co2-header">
          <button className="co2-back" onClick={() => navigate("/home")}>‹</button>
          <h2 className="co2-header-title">Confirm Order</h2>
        </div>

        <div className="co2-body">

          {/* Shipping address */}
          <div className="co2-section">
            <div className="co2-section-header">
              <h3 className="co2-section-title">Shipping Address</h3>
              <button
                className="co2-edit-btn"
                onClick={() => navigate("/address")}
              >
                <img src={editIcon} alt="editIcon" />
              </button>
            </div>
            <div className="co2-address-box">
              778 Locust View Drive Oaklanda, CA
            </div>
          </div>
 
          {/* Order summary */}
          <div className="co2-section">
            <div className="co2-section-header">
              <h3 className="co2-section-titleTwo">Order Summary</h3>
              <button className="co2-edit-tag">Edit</button>
            </div>
            
            <div className="co2-items">
              <div className="co2-divider" />
              {items.map((item) => (
                <div className="co2-item" key={item.id}>
                  <div className="co2-item-top">
                    <button className="co2-delete-btn"><img src={trashIcon} alt="trashIcon" /></button>
                  </div>
                  <div className="co2-item-row">
                    <img src={item.img} alt={item.name} className="co2-item-img" />
                    <div className="co2-item-info">
                      <p className="co2-item-name">{item.name}</p>
                      <p className="co2-item-price">${item.price.toFixed(2)}</p>
                      <p className="co2-item-date">{item.date}</p>
                      <p className="co2-item-count">{item.items}</p>
                    </div>
                  </div>
                  <div className="co2-item-actions">
                    <button
                      className="co2-cancel-btn"
                      onClick={() => setItems(items.filter(i => i.id !== item.id))}
                    >
                      Cancel Order
                    </button>
                    <div className="co2-qty-wrap">
                      <span><img src={editIcon} alt="editIcon" /></span>
                      <button className="co2-qty-btn" onClick={() => decrement(item.id)}>−</button>
                      <span className="co2-qty">{item.qty}</span>
                      <button className="co2-qty-btn" onClick={() => increment(item.id)}>+</button>
                    </div>
                  </div>
                  <div className="co2-divider" />
                </div>
              ))}
            </div>
          </div>

          {/* Price summary */}
          <div className="co2-summary">
            <div className="co2-summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="co2-summary-row">
              <span>Tax and Fees</span>
              <span>${TAX.toFixed(2)}</span>
            </div>
            <div className="co2-summary-row">
              <span>Delivery</span>
              <span>${DELIVERY.toFixed(2)}</span>
            </div>
            <div className="co2-divider" />
            <div className="co2-summary-row co2-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Place order button */}
          <button
            className="co2-btn-place"
            onClick={() => navigate("/payment")}
          >
            Place Order
          </button>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

ConfirmOrder.propTypes = { children: PropTypes.node };
export default ConfirmOrder;